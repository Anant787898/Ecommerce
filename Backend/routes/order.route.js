import express from "express";
const router = express.Router();
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
} from "../controller/order.controller.js";
import protect from "../Middleware/auth.middleware.js";

// CREATE ORDER ROUTE
router.post("/", createOrder);

//DELETE ORDER ROUTE
router.delete("/:id", deleteOrder);

//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);

//GET ALL ORDERS
router.get("/",protect, getAllOrders);

// GET USER ORDER ROUTE
router.get("/find/:userId", getUserOrder);

export default router;
