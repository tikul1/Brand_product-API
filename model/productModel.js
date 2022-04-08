const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  B_Name: {
    type: String,
    // required: true,
  },
  P_Name: {
    type: String,
    // required: true,
  },
  P_Catagory: {
    type: String,
    // required: true,
  },
  P_Price: {
    type: Number,
    // required: true,
  },
  P_Quantity: {
    type: Number,
    // required: true,
  },
  P_Sold: {
    type: Number,
    // required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
