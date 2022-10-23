import { apiV1 } from "./routes/v1";

import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelize from "./config/squelize";

dotenv.config();

const bootServer = () => {
  const PORT = process.env.PORT || 8080;

  const app: Application = express();

  app.use("/static", express.static(__dirname + "/public"));
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //Use APIs
  app.use("/api/v1", apiV1);

  //app listen
  app.listen(PORT, () => {
    console.log("Sever is running on PORT = " + PORT);
  });
};

sequelize.authenticate().then(() => {
  console.log("Connection MYSQL successfully !!");
});

bootServer();
