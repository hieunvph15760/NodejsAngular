import { Router } from "express";
import { createOderDetails } from "../controllers/orderDetails";

const router = Router();

router.post("/orderDetails",createOderDetails);

export default router;