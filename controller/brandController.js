// const { result } = require("lodash");
const expess = require("express");
const { indexOf } = require("lodash");
const brands = require("../model/brandModel");
const {
  updateUserData,
  firstAndLast,
  addElement,
} = require("../helpers/queryHelpers");
const { data, newUser } = require("../helpers/dataForQuery");

const dataList = async (req, res) => {
  // find data by gender
  // try {
  //   let byGender = data.filter((obj) => {
  //     if (obj.gender === "female") {
  //       return obj;
  //     }
  //   });
  //   res.json({ byGender });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }

  //map data for specific field
  // try {
  //   let mapData = data.map((obj) => ({
  //     name: obj.name,
  //     gender: obj.gender,
  //     age: obj.dob.age,
  //     email: obj.email,
  //     picture: obj.picture,
  //   }));
  //   res.json({ mapData });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }

  // filter data by age ascending order.    // grouping//
  // try {
  //   data.sort((a, b) => {
  //     return a.dob.age - b.dob.age;
  //   });
  //   let mapData = data.map((obj) => ({
  //     name: obj.name,
  //     gender: obj.gender,
  //     age: obj.dob.age,
  //     email: obj.email,
  //   }));
  //   res.json({ mapData });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }

  //filter data by name ascending
  // try {
  //   data.sort((a, b) => {
  //     return a.name.first.localeCompare(b.name.first);
  //   });
  //   let mapData = data.map((obj) => ({
  //     name: obj.name,
  //     gender: obj.gender,
  //     age: obj.dob.age,
  //     email: obj.email,
  //   }));
  //   res.json({ mapData });
  // } catch (e) {
  //   res.json({ msg: "an error " + e });
  // }
  //filter data by age
  try {
    let mapData = data
      .filter((obj) => obj.dob.age > 70)
      .map((obj) => ({
        name: obj.name,
        gender: obj.gender,
        age: obj.dob.age,
        email: obj.email,
      }));
    res.json({ mapData });
  } catch (e) {
    res.json({ msg: "an error " + e });
  }
};

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
    await newBrand.save();
    res.json(newBrand);
  } catch (error) {
    res.json("Error Occured");
  }
};

const brandUpdate = async (req, res) => {
  try {
    const brandname = await brands.findById(req.body.id);
    Object.assign(brandname, req.body);
    await brandname.save();
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

module.exports = { brandList, brandAdd, brandRemove, brandUpdate, dataList };
