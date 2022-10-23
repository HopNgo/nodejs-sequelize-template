import { DataTypes } from "sequelize";
import sequelize from "../config/squelize";
import Book from "./book.model";

const Author = sequelize.define(
  "author",
  {
    authorID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    paranoid: true,
  }
);




export default Author;
