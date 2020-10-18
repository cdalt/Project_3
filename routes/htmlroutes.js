var router = require("express").Router();
var passport = require("passport");
const User = require("../models/user.js");
require("../passport/config.js");
<<<<<<< HEAD
=======
// const cors = require("cors");
// const {
//   findAll,
//   create,
//   update,
//   findById,
//   remove,
// } = require("../controllers/petcontroller");
const { create } = require("../controllers/user.js");
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
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
<<<<<<< HEAD
module.exports = router;
=======
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
// create users
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
