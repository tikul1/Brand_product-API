const { response } = require("express");
const brands = require("../model/brandModel");
const brandList = async (req, res) => {
  try {
    await brands.find({}).then((response) => {
      res.json({ response });
    });
  } catch (err) {
    res.json({ msg: "an error occured" });
  }
};

const brandAdd = async (req, res) => {
  try {
    newBrand = await new brands({
      brandName: req.body.brandName,
      brandType: req.body.brandType,
    });
    newBrand.save();
    res.json(newBrand);
  } catch (error) {
    res.json("Error Occured");
  }
};

const brandUpdate = async (req, res) => {
  try {
    const brandname = await brands.findById(req.body.id);
    Object.assign(brandname, req.body);
    brandname.save();
    res.json({ msg: `Product updated sucessfully.` });
  } catch (err) {
    res.json({ msg: "An error occured" + err });
  }
};
const brandRemove = async (req, res) => {
  try {
    let brandId = req.params.id;
    await brands.findByIdAndRemove(brandId);
    res.json({ msg: "brand removed" });
  } catch (err) {
    res.json({ msg: "an error occured" + err });
  }
};

module.exports = { brandList, brandAdd, brandRemove, brandUpdate };
