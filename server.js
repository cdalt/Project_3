var express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
<<<<<<< HEAD
=======
// import app
>>>>>>> cfc73d1a1ad6be5a5a4c3aee2baabadf4bd94f27

var PORT = process.env.PORT || 8080;
var db = require("./models");
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
  useUnifiedTopology: true,
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
