const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcryptjs");

const users = require("../model/userModel");

exports.initializingPassport = () => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        await users
          .findOne({ email: email })
          .then((user) => {
            console.log(user);
            if (!user) {
              return done(null, false, { msg: "the email is not registered" });
            }

            // console.log(JSON.stringify(user.password));
            bcrypt.compare(password, user.password, (err, isMatch) => {
              console.log(isMatch);
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { msg: "password incorrect" });
              }
            });
          })
          .catch((err) => console.log(err));
      }
    )
  );
};
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await users.findById(id);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
