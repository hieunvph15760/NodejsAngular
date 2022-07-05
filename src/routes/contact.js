import { Router } from "express";
import { createContact, getAllContact, removeContact } from "../controllers/contact.js";

const router = Router();

router.post("/contact",createContact);
router.delete("/contact/:id",removeContact);
router.get("/contact",getAllContact);


export default router;