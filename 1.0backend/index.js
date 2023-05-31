// packages
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const expressSession  = require("express-session")

// local
const connectDb = require("./configs/db");
const apiRoutes = require("./routes/api");

// Set up Passport.js
app.use(passport.initialize());
app.use(passport.session());
const initializePassport = require("./configs/passportConfig");
initializePassport(passport)

const app = express();
app.use(express.json());

connectDb();

app.use("/api", apiRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Listening on Port ${port} and running in ${process.env.NODE_ENV}`
  );
});
