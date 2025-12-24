import express from "express"
import { placeOrder , allOrders, updateStatus,userOrders, placeOrderStripe, verifyStripe , placeOrderRazorpay, verifyRazorpay} from "../controllers/orderControllers.js"
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

// Admin Features 
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features 
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User Feature
orderRouter.post('/userOrders',authUser,userOrders)

// verify payment 
orderRouter.post('/verifyStripe',authUser, verifyStripe);
orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay);

export default orderRouter;

