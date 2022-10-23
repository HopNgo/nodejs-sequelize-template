import { Model } from "sequelize";
import IBook from "../interfaces/book";
import Book from "../models/book.model";

const BookMigration = {
  createTable: (): Promise<Model<IBook>> => {
    console.log("The table for the Book model was just created!");
    return Book.sync({ alter: true });
  },
  dropTable: (): Promise<void> => {
    console.log("Book table dropped!");
    return Book.drop();
  },
};

export default BookMigration;
