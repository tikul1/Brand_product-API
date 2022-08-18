// const products = require("../model/productModel");
// const _ = require("lodash");
//to show product list
const fetch = require("node-fetch");

const superList = async (req, res) => {
  try {
    const res1 = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    console.log(res1);
    res.json(res1);
  } catch (error) {
    res.json({ msg: "An Error occured" });
  }
};

//to show single products using id by get method
const superById = async (req, res, next) => {
  try {
    const listById = await products
      .findById(req.params.id)
      .populate("brandId", "_id brandName brandType ");
    res.json(listById);
  } catch (error) {
    res.json({ msg: "An Error occured: " + error });
  }
};

//to add product details

const superAdd = async (req, res) => {
  try {
    const newProduct = await new products({
      productName: req.body.productName,
      productCatagory: req.body.productCatagory,
      productPrice: req.body.productPrice,
      productQuantity: req.body.productQuantity,
      brandId: req.body.brandId,
    });

    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.json("Error Occured");
  }
};

//to update product details

const superUpdate = async (req, res) => {
  try {
    const productId = await products.findById(req.body.id);
    Object.assign(productId, req.body);
    await productId.save();
    res.json({ msg: `Product updated sucessfully.` });
  } catch (err) {
    res.json({ msg: "An error occured" + err });
  }
};

const superRemove = async (req, res) => {
  try {
    let productId = req.params.id;
    await products.findByIdAndRemove(productId).then((product) => {
      res.json({ msg: "product removed sucessfully", product });
    });
  } catch (err) {
    res.json({ msg: "An error occured: " + err });
  }
};

const superSearch = async (req, res) => {
  try {
    const { productName, productCatagory, productSold, productQuantity } =
      req.query;
    console.log(req.query);
    await products.find(req.query).then((response) => {
      res.json({ response });
    });
  } catch (error) {
    res.json({ msg: "An Error occured: " + error });
  }
};

// const ProductById = async (req, res, next) => {
//   try {
//     const listById = await products.findById(req.params.id, (err, product) => {
//       if (err) {
//         return console.log("error");
//       }
//       // console.log(product);
//       for (const key of Object.entries(product.toJSON())) {
//         console.log(`${key[0]} => ${key[1]}`);
//       }
//     });
//     res.json(listById);
//   } catch (error) {
//     res.json({ msg: "An Error occured: " + error });
//   }
// };

module.exports = {
  superList,
};
