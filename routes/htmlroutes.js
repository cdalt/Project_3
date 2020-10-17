var router = require("express").Router();
var passport = require("passport");
const User = require("../models/user.js");
require("../passport/config.js");
const cors = require("cors");
// const {
//   findAll,
//   create,
//   update,
//   findById,
//   remove,
// } = require("../controllers/petcontroller");
const { create } = require("../controllers/user.js");
// router
//   .route(
//     "/",
//     passport.authenticate("google", {
//       scope: ["https://www.googleapis.com/auth/userinfo.email"],
//     })
//   )
//   .get(function (req, res, next) {
//     console.log("Testing");
//     res.send("/");
//   });
//create users
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    if (req.user) {
      res.redirect("http://localhost:3000/home");
    } else {
      res.redirect("http://localhost:3000/login");
    }
  }
);
router.get("/auth/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});
router.post("/signup", create);

// router.post("/signup", (req, res) => {
//   console.log("Hello");
//   console.log(req.body);
//   res.send(req.body);
// });

// router.get("/test", (req, res) => {
//   console.log("test route reached");
// });
module.exports = router;
// create users
