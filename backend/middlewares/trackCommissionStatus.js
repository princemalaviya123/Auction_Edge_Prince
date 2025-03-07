import  User  from "../models/userSchema.js"; // Ensure correct case and path
import { catchAsyncErrors } from "./catchAsyncErrors.js"; // Add .js if using ES modules
import ErrorHandler from "./error.js"; // Add .js if necessary

export const trackCommissionStatus = catchAsyncErrors(
  async (req, res, next) => {
    const user = await User.findById(req.user._id);
    if (user.unpaidCommission > 0) {
      return next(
        new ErrorHandler(
          "You have unpaid commissions. Please pay them before posting a new auction.",
          403
        )
      );
    }
    next(); 
  }
);

// export const trackCommissionStatus = catchAsyncErrors(async (req, res, next) => {
//     const user = await User.findById(req.user._id);
//     if (user?.unpaidCommission > 0) {
//         return next(
//             new ErrorHandler("You have unpaid commission. Please pay them before posting a new auction.", 403)
//         );
//     }
//     next();
// });
