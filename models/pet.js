const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const petSchema = new Schema({
  animal: { type: String, required: true },
  breed: { type: String, required: true },
  size: { type: String, required: true },
  location: { type: String, required: true },
  shelterid: { type: String, required: true },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
