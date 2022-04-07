const express = require("express");
const router = express.Router();
const products = require("../model/productModel");

router.get("/", (req, res, next) => {
  products
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch(() => {
      res.json({ msg: "An Error occured" });
    });
});

//to add product details

router.post("/", (req, res, next) => {
  try {
    const newProduct = new products({
      B_Name: req.body.B_Name,
      P_Name: req.body.P_Name,
      P_Catagory: req.body.P_Catagory,
      P_Price: req.body.P_Price,
      P_Quantity: req.body.P_Quantity,
      P_Sold: req.body.P_Sold,
    });

    newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.json("Error Occured");
  }
});
module.exports = router;
