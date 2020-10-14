const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: false },
  password: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  googleId: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
