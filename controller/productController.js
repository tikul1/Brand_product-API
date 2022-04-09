const products = require("../model/productModel");
//to show product list

const productList = (req, res) => {
  products
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ msg: "An Error occured" + error });
    });
};

//to show single products using id by get method
const ProductById = (req, res, next) => {
  products
    .findById(req.params.id)
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ msg: "An Error occured: " + error });
    });
};

//to add product details

const productAdd = (req, res) => {
  try {
    const newProduct = new products({
      productName: req.body.productName,
      productCatagory: req.body.productCatagory,
      productPrice: req.body.productPrice,
      productQuantity: req.body.productQuantity,
      brandId: req.body.brandId,
    });

    newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.json("Error Occured");
  }
};

//to update product details

const productUpdate = (req, res) => {
  let productId1 = req.body.id;
  let updatedData = {
    productName: req.body.productName,
    productCatagory: req.body.productCatagory,
    productPrice: req.body.productPrice,
    productQuantity: req.body.productQuantity,
    productSold: req.body.productSold,
    brandId: req.body.brandId,
  };
  products
    .findByIdAndUpdate(productId1, { $set: updatedData })
    .then(() => {
      res.json({ msg: `Product updated sucessfully.` });
    })
    .catch((err) => {
      res.json({ msg: "An error occured" + err });
    });
};

const productRemove = (req, res) => {
  let productId = req.params.id;
  products
    .findByIdAndRemove(productId)
    .then((product) => {
      res.json({ msg: "product removed sucessfully", product });
    })
    .catch((err) => {
      res.json({ msg: "An error occured: " + err });
    });
};

const productSearch = (req, res) => {
  const { productName, productCatagory, productSold, productQuantity } =
    req.query;
  console.log(req.query);
  products
    .find(req.query)
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ msg: "An Error occured: " + error });
    });
};

module.exports = {
  productList,
  ProductById,
  productRemove,
  productUpdate,
  productAdd,
  productSearch,
};
