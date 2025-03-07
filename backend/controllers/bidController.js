import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Auction } from "../models/auctionSchema.js";
import { Bid } from "../models/bidSchema.js";
import  User  from "../models/userSchema.js";

// Running Auction ma PlaceBid
export const placeBid = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const auctionItem = await Auction.findById(id);
  if (!auctionItem) {
    return next(new ErrorHandler("Auction Item not found.", 404));
  }
  const { amount } = req.body;
  if (!amount) {
    return next(new ErrorHandler("Please place your bid.", 404));
  }
  if (amount <= auctionItem.currentBid) {
    return next(
      new ErrorHandler("Bid amount must be greater than the current bid.", 404)
    );
  }
  if (amount < auctionItem.startingBid) {
    return next(
      new ErrorHandler("Bid amount must be greater than starting bid.", 404)
    );
  }

  try {

    // aa item mate j bid kareli che e check kare
   // It checks if the user has already placed a bid on this auction item in the database.
    const existingBid = await Bid.findOne({
      "bidder.id": req.user._id,
      auctionItem: auctionItem._id,
    });

     // Action Item ma cheke nai e check kare.
// //It looks through the bids array inside auctionItem (likely already loaded in memory). voiding an extra database query.
    const existingBidInAuction = auctionItem.bids.find(
      (bid) => bid.userId.toString() == req.user._id.toString()
    );

    // jo Bid Existing hashe to Update.
    if (existingBid && existingBidInAuction) {
      existingBidInAuction.amount = amount;
      existingBid.amount = amount;
      await existingBidInAuction.save();
      await existingBid.save();
      auctionItem.currentBid = amount;
    } 
    else { 
        // create New Bid
      const bidderDetail = await User.findById(req.user._id);
      const bid = await Bid.create({
        amount,
        bidder: {
          id: bidderDetail._id,
          userName: bidderDetail.userName,
          profileImage: bidderDetail.profileImage?.url,
        },
        auctionItem: auctionItem._id,
      });
      auctionItem.bids.push({
        userId: req.user._id,
        userName: bidderDetail.userName,
        profileImage: bidderDetail.profileImage?.url,
        amount,
      });
      auctionItem.currentBid = amount;
    }
    await auctionItem.save();

    res.status(201).json({
      success: true,
      message: "Bid placed.",
      currentBid: auctionItem.currentBid,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message || "Failed to place bid.", 500));
  }
});

// import ErrorHandler from "../middlewares/error";
// import {Acution} from "../models/Acution";
// import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js';
// import {Bid} from "../models/bidSchema";
// import User  from "../models/userschema";


// // Running Auction ma PlaceBid
// export const placeBid = catchAsyncErrors(async(req,res,next)=>{
//     const {id} = req.params;
//     const auctionItem = await Acution.findById(id);

//     if(!auctionItem){
//         return next(new ErrorHandler("Auction Item not found", 400))
//     }

//     const amount = req.body;

//     if(!amount){
//         return next(new ErrorHandler("Please enter your bid", 404))
//     }
//     if(amount <= auctionItem.currentBid){
//         return next(new ErrorHandler("Bid amount must be greater than the current bid.", 404))
//     };
//     if(amount< auctionItem.startingBid){
//         return next(new ErrorHandler("Bid amount must be greater than the starting bid.", 404));
//     }


// try{
//     // aa item mate j bid kareli che e check kare
//     // It checks if the user has already placed a bid on this auction item in the database.
//     const existingBid = await Bid.findOne({
//         "bidder.id": req.user._id,
//         auctionItem: auctionItem._id,
//     });
    
//     // Action Item ma cheke nai e check kare.
// //It looks through the bids array inside auctionItem (likely already loaded in memory). voiding an extra database query.
//     const existingBidInAuction = auctionItem.bids.find((bid)=> bid.userId.toString() == req.user._id.toString());


//     // jo Bid Existing hashe to Update.
//     if(existingBid && existingBidInAuction){
//         existingBidInAuction.amount = amount;
//         existingBid.amount = amount;

//         await existingBidInAuction.save();
//         await existingBid.save();
//         auctionItem.currentBid = amount;
//     }
//     else{ // create New Bid
//         const bidderDetail = await User.findById(req.user._id);
//         const bid = await Bid.create({
//             amount,
//             bidder: {
//                 id: bidderDetail._id,
//                 userName: bidderDetail.userName,
//                 profileImage: bidderDetail.profileImage?.url,
//             },
//         })
//         auctionItem.currentBid = amount;
//     }
//     await auctionItem.save();

//     res.status(201).jason({
//         success: true,
//         message: "Bid placed.",
//         currentBid: auctionItem.currentBid,
//     });

// }catch(error){
//     return next(new ErrorHandler(error.message || "Failed to place bid.", 500));
// }
// });
