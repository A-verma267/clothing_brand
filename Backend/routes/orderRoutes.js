import express from "express"
import { placeOrder , allOrders, updateStatus,userOrders} from "../controllers/orderControllers.js"
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

// Admin Features 
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features 
orderRouter.post('/place', authUser, placeOrder)
// orderRouter.post('/stripe',adminAuth,placeOrderStripe)
// orderRouter.post('/razorpay',adminAuth,placeOrderRazorpay)

//User Feature
orderRouter.post('/userOrders',authUser,userOrders)

// verify payment 
// orderRouter.post('/verifyStripe',authUser, verifyStripe);

export default orderRouter;

