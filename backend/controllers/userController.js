// import { User } from "../models/userschema.js";
// import ErrorHandler from "../middlewares/error.js"
// import { v2 as cloudinary } from "cloudinary"

// export const register = async (req, res, next) => {
//     if (!req.files || Object.keys(req.files).length === 0) {
//         return next(new ErrorHandler("profile image required.", 400));
//         // return res.status(400).json({
//         //     success:false,
//         //     message:"Profile image required."  ,
//     }
//     const { profileImage } = req.files;

//     const allowedFormate = ["image/png", "image/jpg", "image/webp"];
//     if (!allowedFormate.includes(profileImage.mimetype)) {
//         return next(new ErrorHandler("file formate not supported.", 400));
//     }

//     const { userName, email, password, address, phone, role, bankAccountNumber, bankAccountName, bankName, gpayUPI, paypalEmail } = req.body;


//     if (!userName || !email || !password || !address || !phone || !role) {
//         return next(new ErrorHandler("Please fill all the fields", 400));
//     }
//     if (role === "Auctioneer") {
//         if (!bankAccountNumber || !bankAccountName || !bankName) {
//             return next(new ErrorHandler("Please fill bank details", 400));
//         }
//         if (!gpayUPI) {
//             return next(new ErrorHandler("please enter payUPI.", 400));
//         }
//         if (!paypalEmail) {
//             return next(new ErrorHandler("please enter paypal email.", 400));
//         }
//     }

//     const isRegistered = await User.findOne({ email });
//     if (isRegistered) {
//         return next(new ErrorHandler("Email already registered", 400));
//     }

//     const cloudinaryResponse = await cloudinary.uploader.upload(profileImage.tempFilePath, {
//         folder: " Auction profile-image",
//     });
//     if (!cloudinaryResponse || cloudinaryResponse.error) {
//         console.error("Cloudinary Error:", cloudinaryResponse.error || "Uknown Cloudinary error.");
//         return next(new ErrorHandler("Failed to upload profile image", 500));
//     }

//     const user = await User.create({
//         userName, email, password, address, phone, role,
//         profileImage: { public_id: cloudinaryResponse.public_id, url: cloudinaryResponse.secure_url }, paymentMethod: {
//             bankTransfer: { bankAccountNumber, bankAccountName, bankName },
//             gpay: { gpayUPI },
//             paypal: { paypalEmail },
//         },
//     });

//     res.status(201).json({
//         success: true,
//         message:"User registered successfully",
//     });
// };

import User from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { v2 as cloudinary } from "cloudinary";
import { generateToken } from "../utils/jwtToken.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const register = async (req, res, next) => {
    try {
        // Check if files are uploaded
        if (!req.files || Object.keys(req.files).length === 0) {
            return next(new ErrorHandler("Profile image required.", 400));
        }
        const { profileImage } = req.files;

        // Validate file format
        const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
        if (!allowedFormats.includes(profileImage.mimetype)) {
            return next(new ErrorHandler("File format not supported.", 400));
        }

        // Extract required fields from the request body
        const {
            userName,
            email,
            password,
            address,
            phone,
            role,
            bankAccountNumber,
            bankAccountName,
            bankName,
            gpayUPI,
            paypalEmail,
        } = req.body;

        // Validate required fields
        if (!userName || !email || !password || !address || !phone || !role) {
            return next(new ErrorHandler("Please fill all the fields.", 400));
        }
        if (role === "Auctioneer") {
            if (!bankAccountNumber || !bankAccountName || !bankName) {
                return next(new ErrorHandler("Please fill bank details.", 400));
            }
            if (!gpayUPI) {
                return next(new ErrorHandler("Please enter GPay UPI.", 400));
            }
            if (!paypalEmail) {
                return next(new ErrorHandler("Please enter PayPal email.", 400));
            }
        }

        // Check if the user is already registered
        const isRegistered = await User.findOne({ email });
        if (isRegistered) {
            return next(new ErrorHandler("Email already registered.", 400));
        }

        // Upload profile image to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(profileImage.tempFilePath, {
            folder: "Auction profile-image",
        });

        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary error.");
            return next(new ErrorHandler("Failed to upload profile image.", 500));
        }

        // Create user in the database
        const user = await User.create({
            userName,
            email,
            password,
            address,
            phone,
            role,
            profileImage: {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
            },
            paymentMethod: {
                bankTransfer: { bankAccountNumber, bankAccountName, bankName },
                gpay: { gpayUPI },
                paypal: { paypalEmail },
            },
        });

        generateToken(user, "User registered successfully.", 201, res) //respond
        // Respond with success
        // res.status(201).json({
        //     success: true,
        //     message: "User registered successfully.",
        // });
    } catch (error) {
        // Catch and pass any error to the error handler middleware
        console.error("Error in register function:", error);
        next(error);
    }
};

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new ErrorHandler("Please provide both email and password.", 400));
    // Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password.", 400));
    }
    // Check if password is correct
    if (!(await user.comparePassword(password))) {
        return next(new ErrorHandler("Invalid email or password.", 400));
    }
    // Generate token
    generateToken(user, "User logged in successfully.", 200, res);
});

export const getProfile = catchAsyncErrors(async (req, res, next) => {
    // const user = await User.findById(req.user.id);
    // if (!user) {
    //     return next(new ErrorHandler("User not found.", 404));
    // }
    const user =req.user;
    res.status(200).json({
        success: true,
        user,
    });
});


export const logout = catchAsyncErrors(async (req, res, next) => {
     res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logout Successfully.",
    });
});
export const fetchleaderboad = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find({ moneySpent: { $gt: 0 } });
    const leaderboard = users.sort((a, b) => b.moneySpent - a.moneySpent);
    res.status(200).json({
      success: true,
      leaderboard,
    });
 });
