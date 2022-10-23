import express, { Router } from "express";
import {
  addNewAuthor,
  createTableAuthor,
} from "../../controllers/author.controller";

const router: Router = express.Router();

router.get("/createTableAuthor", createTableAuthor);

router.post("/addNewAuthor", addNewAuthor);

export const authorRoutes = router;
