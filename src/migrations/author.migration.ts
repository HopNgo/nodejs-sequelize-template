import Author from "../models/author.model";

const AuthorMigration = {
  createTable: async (): Promise<void> => {
    return Author.sync({ alter: true })
      .then(() =>
        console.log("The table for the Author model was just created!")
      )
      .catch((error) => console.log(error));
  },
  dropTable: async (): Promise<void> => {
    console.log("Author table dropped!");
    return Author.drop()
      .then(() => {
        console.log("Author table dropped!");
      })
      .catch((error) => console.log(error));
  },
  truncateTable: () => {
    return Author.truncate()
      .then(() => console.log("All values in author table were removed"))
      .catch((error) => console.log(error));
  },
};

export default AuthorMigration;
