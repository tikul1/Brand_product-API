const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    animalName: { type: String, trim: true },
    animalBreed: String,
    animalAge: Number,
    animalHobbies: [],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Animal", animalSchema);
