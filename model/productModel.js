const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productCatagory: String,
  productPrice: Number,
  productQuantity: Number,
  productSold: Number,
});

module.exports = mongoose.model("product", productSchema);
