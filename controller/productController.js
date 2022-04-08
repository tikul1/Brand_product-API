const products = require("../model/productModel");

//to show product list

const index = (req, res) => {
  products
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ msg: "An Error occured" + error });
    });
};

// to show product by id
// using post method
// const search2 = (req, res) => {
//   let productId = req.body.id;
//   products
//     .findById(productId)
//     .then((response) => {
//       res.json({ response });
//     })
//     .catch((error) => {
//       res.json({ msg: "An Error occured " + error });
//     });
// };

//to show single products using id by get method
const search = (req, res, next) => {
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

const add = (req, res) => {
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
};

//to update product details

const update = (req, res) => {
  let productId1 = req.body.id;
  let updatedData = {
    B_Name: req.body.B_Name,
    P_Name: req.body.P_Name,
    P_Catagory: req.body.P_Catagory,
    P_Price: req.body.P_Price,
    P_Quantity: req.body.P_Quantity,
    P_Sold: req.body.P_Sold,
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

// router.put("/:id", (req, res) => {
//   let updatedData = {
//     B_Name: req.body.B_Name,
//     P_Name: req.body.P_Name,
//     P_Catagory: req.body.P_Catagory,
//     P_Price: req.body.P_Price,
//     P_Quantity: req.body.P_Quantity,
//     P_Sold: req.body.P_Sold,
//   };
//   products
//     .findByIdAndUpdate(req.params.id, { $set: updatedData })
//     .then((products) => {
//       res.json({ msg: `Product updated sucessfully.`, products });
//     })
//     .catch((err) => {
//       res.json({ msg: "An error occured: " + err });
//     });
// });

const remove = (req, res) => {
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

module.exports = { index, add, search, update, remove };
