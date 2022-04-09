const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productCatagory: String,
  productPrice: Number,
  productQuantity: Number,
  productSold: Number,
  brandId: String,
});

module.exports = mongoose.model("Product", productSchema, "productapi");
