import express, { Router } from "express";
import {
  addNewBook,
  createBookTable,
  deleteAllValuesBookTable,
  deleteBookByID,
  dropBookTable,
  getAllBook,
  getBookByID,
  updateBookByID,
} from "../../controllers/book.controller";

const router: Router = express.Router();

router.get("/createBookTable", createBookTable);

router.get("/dropBookTable", dropBookTable);

router.get("/truncateBookTable", deleteAllValuesBookTable);

router.post("/addNewBook", addNewBook);

router.get("/getAllBook", getAllBook);

router.get("/getBookByID/:bookID", getBookByID);

router.put("/updateBookByID/:bookID", updateBookByID);

router.delete("/deleteBookByID/:bookID", deleteBookByID);

export const bookRoutes = router;
