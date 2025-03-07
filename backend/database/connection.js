import mongoose from "mongoose";
import { config } from "dotenv";

export const connection = ()=> {
    mongoose
        .connect(process.env.MONGODB_URI, {
        dbName:"MERN_AUCTION_PLATFORM",
        })
        .then(()=>{
            console.log("Connected to MongoDB");
        })
        .catch((err)=>{
            console.log(err);
        });
};