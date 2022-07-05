import { Router } from "express";
import { createOrder, getAllOrder, getAllOrderDetails } from "../controllers/order.js";

const router = Router();

router.post("/order",createOrder);
router.get("/order",getAllOrder);
router.get("/order/:id",getAllOrderDetails);

export default router;