const dotenv = require("dotenv");
dotenv.config();

const env = process.env;

const development = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: "mysql",
  port: env.DB_PORT,
  ssl: "Amazon RDS",
  logging: console.log,
  timezone: "+09:00",
};

const production = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: "mysql",
  port: env.DB_PORT,
  ssl: "Amazon RDS",
  logging: console.log,
  timezone: "+09:00",
};

const test = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME_TEST,
  host: env.DB_HOST,
  dialect: "mysql",
  port: env.DB_PORT,
  ssl: "Amazon RDS",
  logging: console.log,
  timezone: "+09:00",
};

module.exports = { development, production, test };
