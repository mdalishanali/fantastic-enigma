const Strategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
  { passReqToCallback: true, usernameField: "email" },
  function (req, email, password, done) {
    User.findOne({ email })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }

        if (!user) {
          const encryptedPassword = bcrypt.hashSync(password, salt);
          const { name, email } = req.body;

          let newUser = new User({
            email,
            password: encryptedPassword,
            name,
          });

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }

            return done(null, inserted);
          });
        }
        if (user) {
          return done("User already exist. Please login!", null);
        }
      });
  }
);

module.exports = SignupStrategy;
