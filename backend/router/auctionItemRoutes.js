import {
    addNewAuctionItem,
    getAllItems,
    getAuctionDetails,
    getMyAuctionItems,
    removeFromAuction,
    republishItem
  } from "../controllers/auctionItemController.js";

import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import express from "express";
import { trackCommissionStatus } from "../middlewares/trackCommissionStatus.js";


const router = express.Router();


// ---------- - -- -- - -      1     - - - -- ------ -- -- -
// when user create a new auction item Then This route will be called and it will 1. called isAuthenticated 2.isAuthorized 3. call addNewAuctionItem 
// We Already pass "Actioneer" here and After (Auth.js)  in isAuthorized Function
router.post( "/create", isAuthenticated, isAuthorized("Auctioneer") , trackCommissionStatus,addNewAuctionItem); 

router.get("/allitems", getAllItems);
router.get("/auction/:id", isAuthenticated ,getAuctionDetails ); // require to login 
router.get("/myitems", isAuthenticated, isAuthorized("Auctioneer"), getMyAuctionItems)
router.delete("/delete/:id", isAuthenticated, isAuthorized("Auctioneer"), removeFromAuction); // require to login and authorized to delete item
router.put(
  "/item/republish/:id",
  isAuthenticated,
  isAuthorized("Auctioneer"),
  republishItem
);

export default router;