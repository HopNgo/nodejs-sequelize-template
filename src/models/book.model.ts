import { DataTypes } from "sequelize";
import sequelize from "../config/squelize";
import Author from "./author.model";

const Book = sequelize.define(
  "book",
  {
    bookID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "author",
        key: "authorID",
      },
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Book.belongsTo(Author, {
  foreignKey: "authorID",
});

export default Book;
