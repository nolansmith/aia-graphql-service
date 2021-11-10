const path = require("path");

if (process.env.DEPLOYMENT_HAS_VARS !== "yes") {
  require("dotenv").config({
    path: path.resolve(__dirname, "../../../../../.env"),
  });
}

let opts = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB,
  host: process.env.SQL_HOST,
  logging: false,
  dialect: "postgres",
};

module.exports = {
  development: {
    ...opts,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: process.env.SQL_DIALECT,
    operatorsAliases: false,
  },
  production: { ...opts },
};
