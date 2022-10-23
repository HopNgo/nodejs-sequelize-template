import { Model } from "sequelize";
import IAuthor from "../interfaces/author";
import Author from "../models/author.model";

const AuthorMigration = {
  createTable: (): Promise<Model<IAuthor>> => {
    console.log("The table for the Author model was just created!");
    return Author.sync({ alter: true });
  },
  dropTable: (): Promise<void> => {
    console.log("Author table dropped!");
    return Author.drop();
  },
};

export default AuthorMigration;
