var router = require("express").Router();

router.route("/").get(function (req, res, next) {
  console.log("Testing");
  res.send("Hello World");
});

module.exports = router;
