require("dotenv").config();

const express = require("express");
const app = express();

const connectDb = require("./configs/db");

connectDb();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Listening on Port ${port} and running in ${process.env.NODE_ENV}`
  );
});
