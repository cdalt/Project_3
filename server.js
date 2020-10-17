var express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

// import app

var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  cookieSession({
    // milliseconds of a day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.get("/home", function (req, res) {
  res.send("Home");
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.User.findById(id, function (err, user) {
    done(err, user);
  });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petfinder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
