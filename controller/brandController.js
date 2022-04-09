const { response } = require("express");
const brands = require("../model/brandModel");
const brandList = (req, res) => {
  brands
    .find({})
    .select({ brandName: 1, brandType: 1, date: 1, _id: 0 })

    .then((response) => {
      const brandList = createBrands(response);
      res.json({ brandList });
    })
    .catch((err) => {
      res.json({ msg: "an error occured" });
    });
};

const brandAdd = (req, res) => {
  try {
    newBrand = new brands({
      brandName: req.body.brandName,
      brandType: req.body.brandType,
    });

    newBrand.save();
    res.json(newBrand);
  } catch (error) {
    res.json("Error Occured");
  }
};

const brandUpdate = (req, res) => {
  let brandId = req.body.id;
  let updatedData = {
    brandName: req.body.brandName,
    brandType: req.body.brandType,
  };
  brands
    .findByIdAndUpdate(brandId, { $set: updatedData })
    .then(() => {
      res.json({ msg: `Product updated sucessfully.` });
    })
    .catch((err) => {
      res.json({ msg: "An error occured" + err });
    });
};
const brandRemove = (req, res) => {
  let brandId = req.params.id;
  brands
    .findByIdAndRemove(brandId)
    .then((brand) => {
      res.json({ msg: "brand removed", brand });
    })
    .catch((err) => {
      res.json({ msg: "an error occured" + err });
    });
};

module.exports = { brandList, brandAdd, brandRemove, brandUpdate };
