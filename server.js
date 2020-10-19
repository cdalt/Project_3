var express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
var path = require('path');
var path = require('publicPath');

var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
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
  useCreateIndex: true,
  useFindAndModify: false

});

const uri = "mongodb+srv://bugettrackerdb:PkANEChpRB2I1LKE@find-a-pet.wmvvx.mongodb.net/petfinder?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
