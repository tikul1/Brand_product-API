const { query } = require("express");
const res = require("express/lib/response");
const animals = require("../model/queryPracModel");

const animalList = async (req, res) => {
  try {
    const list = await animals.find();
    res.json(list);
  } catch (error) {
    res.json({ msg: "An Error occured" + error });
  }
};

const animalAdd = async (req, res) => {
  try {
    const newAnimal = await new animals({
      animalName: req.body.animalName,
      animalBreed: req.body.animalBreed,
    });

    await newAnimal.save();
    res.json(newAnimal);
  } catch (error) {
    res.json("Error Occured");
  }
};

// animals.findOne({ animalName: "dog" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
animals.find({ animalName: "bird" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

module.exports = { animalList, animalAdd };
