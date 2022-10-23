import express, { Router } from "express";
import {
  addNewBook,
  createTableBook,
  getAllBook,
  getBookByID,
  updateBookByID,
} from "../../controllers/book.controller";

const router: Router = express.Router();

router.get("/createTableBook", createTableBook);

router.post("/addNewBook", addNewBook);

router.get("/getAllBook", getAllBook);

router.get("/getBookByID/:bookID", getBookByID);

router.put("/updateBookByID/:bookID", updateBookByID);

export const bookRoutes = router;
