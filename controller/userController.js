const users = require("../model/userModel");
const bcrypt = require("bcryptjs");

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
    const salt = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await new users({
      name: req.body.name,
      email: req.body.email,
      password: securedPassword,
      confirmPassword: securedPassword,
    });

    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json("Error Occured");
  }
};

const userUpdate = async (req, res) => {
  try {
    const userId = await users.findById(req.body.id);
    Object.assign(userId, req.body);
    userId.save();
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
  userList,
  userById,
  userRemove,
  userUpdate,
  userAdd,
};
