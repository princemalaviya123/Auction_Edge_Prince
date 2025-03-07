import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minLength: [3, "Username must contain atleast three character"],
        maxLength: [40, "Usename not more then 40 character"],
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [3, "Password must contain atleast three character"],
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        minLength: [10, "phone contain 10 digits"],
        maxLength: [10, "phone not more than 10 digits"],
    },
    profileImage: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    paymentMethod: {
        bankTransfer: {
            bankAccountNumber: String,
            bankAccountName: String,
            bankName: String,
        },
        paypal: {
            paypalEmail: String,
        },
        gpay: {
            gpayUPI: String,
        },
    },
    role: {
        type: String,
        enum: ["Auctioneer", "Super Admin", "Bidder"],
        required: true,
    },
    unpaidCommission: {
        type: Number,
        default: 0,
    },
    auctionsWon: {
        type: Number,
        default: 0,
    },
    moneySpent: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

// it ensures that whenever the password is changed, it’s securely hashed before being saved.
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


// jwt.sign(): It creates a JWT using the user's _id
userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;