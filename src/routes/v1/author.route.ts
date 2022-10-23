import express, { Router } from "express";
import {
  addNewAuthor,
  createAuthorTable,
  deleteAllValuesAuthorTable,
  dropAuthorTable,
} from "../../controllers/author.controller";

const router: Router = express.Router();

router.get("/createAuthorTable", createAuthorTable);

router.get("/dropAuthorTable", dropAuthorTable);

router.get("/truncateAuthorTable", deleteAllValuesAuthorTable);

router.post("/addNewAuthor", addNewAuthor);

export const authorRoutes = router;
