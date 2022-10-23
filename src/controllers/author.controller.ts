import { Request, Response } from "express";
import AuthorMigration from "../migrations/author.migration";
import Author from "../models/author.model";

export const createTableAuthor = (req: Request, res: Response) => {
  AuthorMigration.createTable()
    .then(() => {
      res
        .status(200)
        .json({ message: "create table in Author database successfully!!" });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

export const dropTableAuthor = (req: Request, res: Response) => {
  AuthorMigration.dropTable()
    .then((data) => {
      res
        .status(200)
        .json({ message: "create table in Author database successfully!!" });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

export const addNewAuthor = (req: Request, res: Response) => {
  const { name, age } = req.body;
  Author.create({
    name: name,
    age: age,
  })
    .then((data) => {
      res.status(200).json({
        data: data,
        message: "add new user successfully",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
