import { Request, Response } from "express";
import { Model } from "sequelize";
import IBook from "../interfaces/book";
import BookMigration from "../migrations/book.migration";
import Author from "../models/author.model";
import Book from "../models/book.model";

export const createBookTable = (req: Request, res: Response) => {
  BookMigration.createTable()
    .then(() => {
      res
        .status(200)
        .json({ message: "create table in book database successfully!!" });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};


export const dropBookTable = (req: Request, res: Response) => {
  BookMigration.dropTable()
    .then((data) => {
      res
        .status(200)
        .json({ message: "create table in book database successfully!!" });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
  };
  
  export const deleteAllValuesBookTable= (req: Request, res: Response) => {
    BookMigration.truncateTable()
      .then(() => {
        res
          .status(200)
          .json({ message: "All values in book table were removed" });
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };
export const addNewBook = (req: Request, res: Response) => {
  const { name, genre, photoUrl, authorID } = req.body;
  console.log(authorID);
  Book.create({
    name: name,
    genre: genre,
    photoUrl: photoUrl,
    authorID: authorID,
  })
    .then((data: Model<IBook>) => {
      res.status(200).json({ message: "Add Book successfully", book: data });
    })

    .catch((error) => {
      res.status(400).json(error);
    });
};

export const getAllBook = async (req: Request, res: Response) => {
  await Book.findAll({
    include: {
      model: Author,
      attributes: {
        exclude: ["authorID"],
      },
    },
  })
    .then((data) => {
      res.status(200).json({ book: data });
    })

    .catch((error) => {
      res.status(400).json(error);
    });
};

export const getBookByID = async (req: Request, res: Response) => {
  const bookID: string = req.params.bookID;
  console.log(bookID);
  await Book.findOne({
    include: {
      model: Author,
      attributes: {
        exclude: ["authorID"],
      },
    },
    where: {
      bookID: bookID,
    },
  })
    .then((data) => {
      res.status(200).json({ book: data });
    })

    .catch((error) => {
      res.status(400).json(error);
    });
};

export const updateBookByID = async (req: Request, res: Response) => {
  const bookID: string = req.params.bookID;
  const newUpdatedbook: Partial<IBook> = req.body;

  await Book.update(
    {
      ...newUpdatedbook,
    },
    {
      where: {
        bookID: bookID,
      },
    }
  )
    .then(() => {
      return Book.findByPk(bookID);
    })
    .then((data) => {
      res.status(200).json({ book: data });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

export const deleteBookByID = async (req: Request, res: Response) => {
  const bookID: string = req.params.bookID;
  await Book.destroy({
    where: {
      bookID: bookID,
    },
  })
    .then(() => {
      return Book.findByPk(bookID, { paranoid: false });
    })
    .then((data) => {
      res.status(200).json({
        book: data,
        message: "Deleted this book successfully",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
