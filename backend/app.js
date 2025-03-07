import express from "express"; //module export
import { config } from "dotenv"
import cloudinary from "cloudinary"
import cors from "cors"//connect frontend and backend
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { connection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./router/userRoutes.js";
import auctionItemRouter from "./router/auctionItemRoutes.js";
import bidRouter from "./router/bidRoutes.js"
import commissionRouter from "./router/commissionRouter.js";
import superAdminRouter from "./router/superAdminRoutes.js";
import { verifyCommissionCron } from "./automation/verifyCommissionCron.js";
import endedAuctionCron from "./automation/endedAuctionCron.js";


const app=express();

config({
    path:"./config/config.env"
});

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECERETE_KEY,
});

app.use(cors({
    origin: ["http://localhost:5173"], // Frontend 5173 uper chale che etle tene Permission aapi 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"] 

}))

app.use(cookieParser({
    httpOnly: true,
    secure: true,
    sameSite: "strict", // Bloking cross site attack 
}))

app.use(express.json());
app.use(express.urlencoded({ extended:"true"}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))



app.use("/api/v1/users", userRouter);
app.use("/api/v1/auctionitem", auctionItemRouter);
app.use("/api/v1/bid", bidRouter);
app.use("/api/v1/commission", commissionRouter);
app.use("/api/v1/superadmin", superAdminRouter);

endedAuctionCron();
verifyCommissionCron();

connection();

app.use(errorMiddleware)


export default app;