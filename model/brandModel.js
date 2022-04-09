const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: { type: String, trim: true },
  brandType: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Brand", brandSchema, "productapi");
