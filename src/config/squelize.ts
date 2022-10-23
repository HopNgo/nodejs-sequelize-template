import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize: Sequelize = new Sequelize(
  `mysql://${process.env.MYSQL_USERNAME}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE_NAME}`
);

export default sequelize;
