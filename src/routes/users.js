import { Router } from "express";
import { createUsers, getAllUser, removeUser } from "../controllers/users.js";

const router = Router();

router.get("/users",getAllUser);
router.post("/users",createUsers);
router.delete("/users/:id",removeUser);

export default router;