const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, trim: true },
    brandType: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);
