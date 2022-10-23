import Book from "../models/book.model";

const BookMigration = {
  createTable: async (): Promise<void> => {
    return Book.sync({ alter: true })
      .then(() => console.log("The table for the Book model was just created!"))
      .catch((error) => console.log(error));
  },
  dropTable: async (): Promise<void> => {
    return Book.drop()
      .then(() => console.log("Book table dropped!"))
      .catch((error) => console.log(error));
  },
  truncateTable: () => {
    return Book.truncate()
      .then(() => console.log("All values in book table were removed"))
      .catch((error) => console.log(error));
  },
};

export default BookMigration;
