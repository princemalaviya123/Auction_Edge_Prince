import mongoose from "mongoose";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Auction } from "../models/auctionSchema.js";
import { PaymentProof } from "../models/commissionProofSchema.js";
import User from "../models/userSchema.js";
import { Commission } from "../models/commissionSchema.js";




export const deleteAuctionItem = catchAsyncErrors(async(req, res, next) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next (new ErrorHandler("Invalid id format", 400))
    }

    const auctionItem = await Auction.findById(id);
    if(!auctionItem){
        return next(new ErrorHandler("Auction not found", 404))
    }
    await auctionItem.deleteOne();
    res.status(200).json({
        success: true,
        message: "Auction item deleted successfully"
    });
});

export const getAllPaymentProofs = catchAsyncErrors(async(req, res, next)=>{
    let paymentProofs = await PaymentProof.find();
    res.status(200).json({
        success: true,
        paymentProofs,
    });
});

export const getPaymentProofDetail = catchAsyncErrors(async(req, res, next)=>{
    const {id} = req.params;
    const paymentProofDetail = await PaymentProof.findById(id);
    res.status(200).json({
        success:true,
        paymentProofDetail,
    });
});

export const updateProofStatus = catchAsyncErrors(async(req, res, next)=>{
    const {id} = req.params;
    const {amount,status} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(new ErrorHandler("Invalid ID format.", 400));
    }
    let proof = await PaymentProof.findById(id);
    if(!proof){
        return next(new ErrorHandler("Payment proof not found.", 404));
    }
    proof = await PaymentProof.findByIdAndUpdate(
        id, {status, amount},
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );
    res.status(200).json({
        success: true,
        message: "Payment proof status updated successfully",
        proof,
    });
});

export const deletePaymentProof = catchAsyncErrors(async(req,res,next)=>{

 // const id = req.params; error aavshe aama
    const {id} = req.params;
    const proof = await PaymentProof.findById(id);
    if(!proof){
        return next(new ErrorHandler("Payment proof not found.", 404));
    }
    await proof.deleteOne();
    res.status(200).json({
        success:true,
        message: "Payment proof deleted successfully",
    });
});


export const fetchAllUsers = catchAsyncErrors(async(req,res,next)=>{

    // it give All Users Without Sorting
    // const users = await User.find(); 

    const users = await User.aggregate([   
        // aggregate function is use for 
    // Sorted data in Using GROUP 
        {
            $group:{
                _id: {
                    month: {$month : "$createdAt"},
                    year: {$year : "$createdAt"},
                    role: "$role",
                },
                count: {$sum: 1}, // for Count
            },
        },

        {  // project is for reshaped data store in Object
            $project: {
                month: "$_id.month",
                year: "$_id.year",
                role: "$_id.role",
                count: 1, // for Count
                _id: 0,
            },
        },
        {
            $sort: {year: 1 , month: 1},
        },
    ]);

    const bidders = users.filter((user) => user.role === "Bidder");
    const auctioneers = users.filter((user)=> user.role === "Auctioneer");

    // Uper Nu Skip kare che month ne jema User 0 hoy 
    
    // for Where has Not any User where it fill 0 in Array
    const transformDataToMonthlyArray = (data, totalMonths = 12)=>{
        const result = Array(totalMonths).fill(0); // Array Length will be 12 And kai nai hoy to 0

        data.forEach((item)=> {
            result[item.month - 1] = item.count;
        });

        return result;
    };

    const biddersArray = transformDataToMonthlyArray(bidders);
    const auctioneersArray = transformDataToMonthlyArray(auctioneers);

    res.status(200).json({
        success: true,
        biddersArray,
        auctioneersArray,
    });
});


export const monthlyRevenue = catchAsyncErrors(async(req,res,next)=>{
    const payments = await Commission.aggregate([
        {
            $group: {
                _id:{
                    month: { $month: "$createdAt"},
                    year: { $year: "$createdAt"},
                },
                totalAmount: { $sum: "$amount" },
            },
        },
        {
            $sort: {"_id.year": 1, "_id.month": 1},
        }

    ]);

    const transformDataToMonthlyArray = (payment, totalMonths = 12)=>{
        const result = Array(totalMonths).fill(0);

        payment.forEach((payment)=>{
            result[payment._id.month - 1] = payment.totalAmount;
        })

        return result;
    };

    const totalMonthlyRevenue = transformDataToMonthlyArray(payments);

    res.status(200).json({
        success: true,
        totalMonthlyRevenue,
    })
})
