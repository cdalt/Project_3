var express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
// import app

var PORT = process.env.PORT || 8080;
var db = require("./models");
petfinder.getBreedList('cat', function(err, breeds) {
  console.log(breeds)
});
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
app.get("/home", function (req, res) {
  res.send("Home");
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petfinder", {
  useNewUrlParser: true,
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
