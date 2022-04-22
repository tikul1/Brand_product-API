const users = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

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
    res.json({ list });
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

const userLogin = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ msg: "please enter username and password" });
    }
    const userLogin = await users.findOne({ email });
    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      // console.log(isMatch);
      // token = await userLogin.generateAuthToken();
      // console.log(token);
      if (!isMatch) {
        res.json({ msg: "Please enter correct credential " });
      } else {
        const payload = { email };
        const token = jwt.sign(payload, secret);
        // console.log(token);
        res.json({ token });
      }
    } else {
      res.json({ msg: "Please enter correct credential" });
    }

    // await users.findOne({ name: name }).then((userexist) => {
    //   res.json({ msg: "user found" });
    // });
  } catch (e) {
    res.json({ msg: "error: " + e });
  }
};
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  // console.log(bearerHeader);

  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    console.log(bearer[1]);
    req.token = bearer[1];
    jwt.verify(req.token, secret, (err, authData) => {
      if (err) {
        res.json({ result: err });
      } else {
        next();
      }
    });
  } else {
    res.json({ msg: "token not provided" });
  }
}

module.exports = {
  // createData,
  userList,
  userById,
  userRemove,
  userUpdate,
  userAdd,
  userLogin,
  verifyToken,
};
