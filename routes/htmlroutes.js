var router = require("express").Router();
var passport = require("passport");
require("../passport/config.js");
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
      res.redirect("/login");
    }
  }
);
module.exports = router;
// create users
