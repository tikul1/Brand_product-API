const { query } = require("express");
const mongoose = require("mongoose");
// const res = require("express/lib/response");
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
      animalAge: req.body.animalAge,
      animalHobbies: req.body.animalHobbies,
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

// const findQuery = async () => {
//   try {
//     const result = await animals
//       .find({ animalName: "bird" })
//       .select({ animalBreed: 1 })
//       .limit(1);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//using in, nin
// const findQuery = async () => {
//   try {
//     const result = await animals
//       .find({ animalName: { $in: ["bird", "dog"] } })
//       .select({ animalBreed: 1 });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// and or operator

// const findQuery = async () => {
//   try {
//     const result = await animals
//       .find({
//         $or: [{ animalName: "bird" }, { animalName: "dog" }],
//       })
//       .select({ animalBreed: 1 });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// const updateQuery = async () => {
//   try {
//     const result = await animals.updateOne(
//       { animalAge: { $gte: 5 } },
//       { animalName: "cat" }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateQuery();

// animals.updateMany(
//   { animalAge: { $gte: 5 } },
//   { animalName: "cat" },
//   (err, uData) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("updated name: ", uData);
//     }
//   }
// );

// animals.findOne({ animalAge: { $gte: 5 } }, (err, udata) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Result : ", udata);
//   }
// });

//findbyid
// let id = "6256523b4931ef1657fb6c63";
// animals.findById(id, (err, udata) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Result : ", udata);
//   }
// });

//byid remove and delete
// let id = "6255101b054ef84406a6ce79";
// animals.findByIdAndDelete(id, (err, udata) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted : ", udata);
//   }
// });

// //clone to execute it later
// const q = animals.findOne({ animalName: "dog" }, async (req, res) => {
//   try {
//     await q.exec();
//     // await q.exec();
//     await q.clone().exec();
//   } catch (err) {
//     err;
//   }
// });
// using where

// const findQuery = async () => {
//   try {
//     const result = await animals.where({ animalName: "bird" });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// finding count
// const findQuery = async () => {
//   try {
//     const result = await animals
//       .where({ animalName: "bird" })
//       .count()

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//using .all
// const findQuery = async () => {
//   try {
//     const result = await animals.where({ animalName: "bird" }).all();

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//exists check for collections
// const findQuery = async () => {
//   try {
//     const result = await animals.where("animalName").exists(false);

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// //preferable than countdocument. as this will scan data from meta data
// const findQuery = async () => {
//   try {
//     const result = await animals.find().estimatedDocumentCount();
//     console.log("document count is : %d", result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//find and update
//upsert means if document is not available it will create new
//new means it will show updated data in mongoose. if you are on node js then => returnoriginal: false

// let id = "625672854e186b2cfe2277f0";
// const findQuery = async () => {
//   try {
//     const result = await animals.findOneAndUpdate(
//       { _id: id },
//       { $set: { animalName: "dog1", animalBreed: "labrador" } },
//       { new: true, upsert: true }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//it will remove getters/setters/save . only plain json object NOT MONGOOSE documents

// const findQuery = async () => {
//   try {
//     const result = await animals.find().lean(true);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//show limited documents

// const findQuery = async () => {
//   try {
//     const result = await animals.find().limit(5);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//for skipping documents

// const findQuery = async () => {
//   try {
//     const result = await animals.find().skip(10).limit(5);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//for slicing in array
//there is no array here in database

// const findQuery = async () => {
//   try {
//     const result = await animals.where("animalHobbies").slice(2);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//asc/desc /1 / -1
// const findQuery = async () => {
//   try {
//     const result = await animals
//       .find()
//       .sort({ animalBreed: "desc", animalAge: -1 });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

module.exports = { animalList, animalAdd };
