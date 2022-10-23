import express, { Router } from "express";
import { authorRoutes } from "./author.route";
import { bookRoutes } from "./book.route";

const router: Router = express.Router();

router.use("/book", bookRoutes);

router.use("/author", authorRoutes);

export const apiV1 = router;
