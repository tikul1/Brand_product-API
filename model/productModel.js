const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: String,
    productCatagory: String,
    productPrice: Number,
    productQuantity: Number,
    productSold: Number,

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
