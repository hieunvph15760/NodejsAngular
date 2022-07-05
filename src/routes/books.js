import { Router } from "express";
import { create, getBook, list, litmitBooks, pagination, remove, searchBooks, update } from "../controllers/books.js";

const router = Router();

router.post("/books",create)
router.get("/books",list)
router.get("/booksPagination/:page",pagination)
router.get("/books/:id",getBook)
router.delete("/books/:id",remove)
router.put("/books/:id",update)
router.get("/litmitBooks",litmitBooks)
router.get("/searchBooks",searchBooks)

export default router;