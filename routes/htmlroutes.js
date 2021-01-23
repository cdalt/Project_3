var router = require("express").Router();
var passport = require("passport");
const User = require("../models/user.js");
require("../passport/config.js");
const { create } = require("../controllers/user.js");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "https://find-a-pet-1.herokuapp.com/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    if (req.user) {
      res.redirect("http://localhost:3000/home");
    } else {
      res.redirect("/login");
    }
  }
);
router.get("/auth/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

router.post("/signup", (req, res) => {
  console.log("signup route reached");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
