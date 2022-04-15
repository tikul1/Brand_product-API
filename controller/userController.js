const users = require("../model/userModel");
const bcrypt = require("bcryptjs");

// const createData = async () => {
//   try {
//     const data = new users({
//       name: "         hardik2",
//       email: "ABC@def.com",
//       age: "15",
//       password: "123456",
//       confirmPassword: "123456",
//     });
//     const addData = await users.insertMany([data]);
//     console.log(addData);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createData();

const userList = async (req, res) => {
  try {
    const list = await users.find();
    res.json(list);
  } catch (error) {
    res.json({ msg: "An Error occured" + error });
  }
};

const userById = async (req, res, next) => {
  try {
    const listById = await users.findById(req.params.id);
    res.json(listById);
  } catch (error) {
    res.json({ msg: "An Error occured: " + error });
  }
};
const userAdd = async (req, res) => {
  try {
    const newUser = await new users({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    await newUser.save();
    res.json(newUser);
    const match = await bcrypt.compare(req.body.password, newUser.password);
    console.log(match);
  } catch (error) {
    res.json("Error Occured");
  }
};

const userUpdate = async (req, res) => {
  try {
    const userId = await users.findById(req.body.id);
    Object.assign(userId, req.body);
    await userId.save();
    res.json({ msg: `Product updated sucessfully.` });
  } catch (err) {
    res.json({ msg: "An error occured" + err });
  }
};

const userRemove = async (req, res) => {
  try {
    let userId = req.params.id;
    await users.findByIdAndRemove(userId).then((user) => {
      res.json({ msg: "product removed sucessfully", user });
    });
  } catch (err) {
    res.json({ msg: "An error occured: " + err });
  }
};

module.exports = {
  // createData,
  userList,
  userById,
  userRemove,
  userUpdate,
  userAdd,
};
