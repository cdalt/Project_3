var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
require("dotenv").config();
require("../passport/config.js");
const User = require("../models/user");
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("testing 1 2");
      //check user table for anyone with a facebook ID of profile.id
      User.findOne(
        {
          googleId: profile.id,
        },
        function (err, user) {
          if (err) {
            return done(err);
          }
          //No user was found... so create a new user with values from Facebook (all the profile. stuff)
          if (!user) {
            user = new User({
              googleId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
              // google: profile._json,
            });
            user.save(function (err) {
              if (err) console.log(err);
              return done(err, user);
            });
          } else {
            //found user. Return
            return done(err, user);
          }
        }
      );
    }
  )
);
