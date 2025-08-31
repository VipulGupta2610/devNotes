import express from "express";
import { getNote, saveNote } from "../controller/book.controller.js";

const router = express.Router();

router.get("/",getNote)
router.post("/AdminUpload" , saveNote)

export default router;