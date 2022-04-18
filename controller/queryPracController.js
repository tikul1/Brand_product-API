const { query } = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const Animals = require("../model/queryPracModel");
const orders = require("../model/queryPracModel");
const classes = require("../model/queryPracModel");
const items = require("../model/queryPracModel");
const warehouses = require("../model/queryPracModel");
const salaries = require("../model/queryPracModel");
const sales2019q1 = require("../model/queryPracModel");

// const animalList = async (req, res) => {
//   try {
//     const list = await Animals.find();
//     res.json(list);
//   } catch (error) {
//     res.json({ msg: "An Error occured" + error });
//   }
// };

// const animalAdd = async (req, res) => {
//   try {
//     const newAnimal = await new Animals({
//       animalName: req.body.animalName,
//       animalBreed: req.body.animalBreed,
//       animalAge: req.body.animalAge,
//       animalHobbies: req.body.animalHobbies,
//     });

//     await newAnimal.save();
//     res.json(newAnimal);
//   } catch (error) {
//     res.json("Error Occured");
//   }
// };

// Animals.findOne({ animalName: "dog" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const findQuery = async () => {
//   try {
//     const result = await Animals
//       .find({ animalName: "bird" })
//       .select({ animalBreed: 1 })
//       .limit(1);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//aggregate is used for showing POJOS

// const findQuery = async () => {
//   try {
//     const result = await Animals.aggregate([
//       { $match: { animalName: "bird" } },
//     ]);

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// using in, nin
// const findQuery = async () => {
//   try {
//     const result = await Animals.find({ animalBreed: { $nin: ["husky"] } });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// and/ or operator

// const findQuery = async () => {
//   try {
//     const result = await Animals.find({
//       $and: [{ animalName: "bird" }, { animalBreed: "parrot" }],
//     });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// const updateQuery = async () => {
//   try {
//     const result = await Animals.updateOne(
//       { animalAge: { $gte: 5 } },
//       { animalName: "cat" }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateQuery();

// Animals.updateMany(
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

// Animals.findOne({ animalAge: { $gte: 5 } }, (err, udata) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Result : ", udata);
//   }
// });

//findbyid
// let id = "6256523b4931ef1657fb6c63";
// Animals.findById(id, (err, udata) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Result : ", udata);
//   }
// });

//byid remove and delete
// let id = "6255101b054ef84406a6ce79";
// Animals.findByIdAndDelete(id, (err, udata) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted : ", udata);
//   }
// });

// //clone to execute it later
// const q = Animals.findOne({ animalName: "dog" }, async (req, res) => {
//   try {
//     await q.exec();
//     // await q.exec();
//     const xyz = await q.clone().exec();
//     console.log(xyz);
//   } catch (err) {
//     err;
//   }
// });
// using where

// const findQuery = async () => {
//   try {
//     const result = await Animals.where({ animalName: "bird" });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// finding count
// const findQuery = async () => {
//   try {
//     const result = await Animals.where({ animalName: "bird" }).count();

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//using .all
// const findQuery = async () => {
//   try {
//     const result = await Animals.where({ animalName: "bird" }).all();

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

//exists check for collections
// const findQuery = async () => {
//   try {
//     const result = await Animals.where("animalName").exists(true);

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findQuery();

// //preferable than countdocument. as this will scan data from meta data
// const findQuery = async () => {
//   try {
//     const result = await Animals.find().estimatedDocumentCount();
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
//     const result = await Animals.findOneAndUpdate(
//       { _id: id },
//       { $set: { animalName: "dog2", animalBreed: "labrador" } },
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
//     const result = await Animals.find().lean(true);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//show limited documents

// const findQuery = async () => {
//   try {
//     const result = await Animals.find().limit(5);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//for skipping documents

// const findQuery = async () => {
//   try {
//     const result = await Animals.find().skip(10).limit(5);
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
//     const result = await Animals.where("animalHobbies").slice(0);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

// asc / desc / 1 / -1;
// const findQuery = async () => {
//   try {
//     const result = await Animals.find().sort({ animalBreed: "desc" });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

// aggregate

// const findQuery = async () => {
//   try {
//     const result = await Animals.aggregate([
//       { $project: { _id: 0, animalName: 0 } },
//       { $match: { animalAge: { $gte: 3 } } },
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

//addfields

// const findQuery = async () => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $addFields: {
//           legs: "2 or 4",
//         },
//       },
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

// addfields in array

// const findQuery = async () => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $addFields: {
//           animalHobbies: { $concatArrays: ["$animalHobbies", ["sleeping"]] },
//         },
//       },
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findQuery();

// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $bucket: {
//           groupBy: "$animalAge",
//           boundaries: [1, 3, 4, 7, 8, 9],
//           default: "Other",
//           output: {
//             count: { $sum: 1 },
//             Animals: {
//               $push: {
//                 animal: { $concat: ["$animalName", " ", "$animalBreed"] },
//                 animalAge: "$animalAge",
//               },
//             },
//           },
//         },
//       },
//       {
//         $match: { count: { $gt: 1 } },
//       },
//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $bucketAuto: {
//           groupBy: "$animalAge",
//           buckets: 5,
//           output: {
//             count: { $sum: 1 },
//             titles: { $push: "$animalBreed" },
//           },
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//to find statistics regarding a collection
// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $collStats: {
//           latencyStats: { histograms: true },
//           storageStats: { scale: 2 },
//           count: {},

//           queryExecStats: {},
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//facet to use multiple aggregations

// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $facet: {
//           categorizedbyAge: [
//             {
//               $bucket: {
//                 groupBy: "$animalAge",
//                 boundaries: [5, 9],
//                 default: "Other",
//                 output: {
//                   count: { $sum: 1 },
//                   Animals: {
//                     $push: {
//                       animal: { $concat: ["$animalName", " ", "$animalBreed"] },
//                       animalAge: "$animalAge",
//                     },
//                   },
//                 },
//               },
//             },
//             {
//               $match: { count: { $gt: 1 } },
//             },
//           ],
//           categorizedbyId: [
//             {
//               $bucketAuto: {
//                 groupBy: "$_id",
//                 buckets: 4,
//               },
//             },
//           ],
//         },
//       },
//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// group and count
// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $group: {
//           _id: null,
//           count: { $count: {} },
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// group avrage ,count and sum ,muliply
// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $group: {
//           _id: "$animalAge",
//           totalAge: { $sum: { $multiply: ["$animalAge", "$animalAge"] } },
//           avgAge: { $avg: "$animalAge" },
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//lookup use
// const findQuery = async (req, res) => {
//   try {
//     const result = await orders.aggregate([
//       {
//         $lookup: {
//           from: "inventory",
//           localField: "item",
//           foreignField: "sku",
//           as: "inventory_docs",
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// lookip in array

// const findQuery = async (req, res) => {
//   try {
//     const result = await classes.aggregate([
//       {
//         $lookup: {
//           from: "members",
//           localField: "enrollmentlist",
//           foreignField: "name",
//           as: "enrollee_info",
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//merging

// const findQuery = async (req, res) => {
//   try {
//     const result = await orders.aggregate([
//       {
//         $lookup: {
//           from: "items",
//           localField: "item",
//           foreignField: "item",
//           as: "fromItems  ",
//         },
//       },
//       {
//         $replaceRoot: {
//           newRoot: {
//             $mergeObjects: [{ $arrayElemAt: ["$fromItems", 0] }, "$$ROOT"],
//           },
//         },
//       },
//       { $project: { fromItems: 0 } },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// multiple joins in query using lookup

// const findQuery = async (req, res) => {
//   try {
//     const result = await orders.aggregate([
//       {
//         $lookup: {
//           from: "warehouses",
//           let: { order_item: "$item", order_qty: "$ordered" },
//           pipeline: [
//             {
//               $match: {
//                 $expr: {
//                   $and: [
//                     { $eq: ["$stock_item", "$$order_item"] },
//                     { $gte: ["$instock", "$$order_qty"] },
//                   ],
//                 },
//               },
//             },
//             { $project: { stock_item: 0, _id: 0 } },
//           ],
//           as: "stockdata",
//         },
//       },
//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//////merge

// const findQuery = async (req, res) => {
//   try {
//     const result = await orders.aggregate([
//       [{ $project: { _id: 0 } }, { $merge: { into: "newCollection" } }],
//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//kam nu nathi

// const findQuery = async (req, res) => {
//   try {
//     const result = await getSiblingDB("zoo").salaries.aggregate([
//       {
//         $group: {
//           _id: { fiscal_year: "$fiscal_year", dept: "$dept" },
//           salaries: { $sum: "$salary" },
//         },
//       },
//       {
//         $merge: {
//           into: { db: "reporting", coll: "budgets" },
//           on: "_id",
//           whenMatched: "replace",
//           whenNotMatched: "insert",
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

//replacewith

// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       {
//         $match: {
//           animalName: {
//             $exists: true,
//             $not: { $type: "array" },
//             $type: "object",
//           },
//         },
//       },
//       { $replaceWith: { $mergeObjects: [ { _id: "$_id", first: "", last: "" }, "$name" ] } },
//     ]);

//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([
//       { $unwind: "$animalHobbies" },
//       { $sortByCount: "$animalHobbies" },
//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const findQuery = async (req, res) => {
//   try {
//     const result = await Animals.aggregate([{ $skip: 5 }]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const findQuery = async (req, res) => {
//   try {
//     const result = await sales2019q1.aggregate([
//       { $set: { _id: "2019Q1" } },
//       {
//         $unionWith: {
//           coll: "sales2019q2",
//           pipeline: [{ $set: { _id: "2019Q2" } }],
//         },
//       },
//       { $sort: { _id: 1, store: 1, item: 1 } },
//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const findQuery = async (req, res) => {
//   try {
//     const result = await sales2019q1.aggregate([
//       { $unset: "quantity" },

//     ]);
//     res.json(result);
//   } catch (err) {
//     console.log({ err });
//   }
// };

const findQuery = async (req, res) => {
  try {
    const result = await Animals.aggregate([{ $unwind: "$animalHobbies" }]);
    res.json(result);
  } catch (err) {
    console.log({ err });
  }
};

module.exports = { findQuery };
