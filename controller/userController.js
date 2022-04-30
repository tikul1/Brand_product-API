const users = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const multer = require("multer");
const path = require("path");
// const imageToBase64 = require("image-to-base64");
// const base64ToImage = require("base64-to-image");
const encode = require("node-base64-image").encode;
const decode = require("node-base64-image").decode;
const nodemailer = require("nodemailer");
const { response } = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const secret = process.env.SECRET_KEY;
const session = require("express-session");
const { initializingPassport } = require("../helpers/passportHelper");

initializingPassport();

const login = (req, res) => {
  res.json(req.user);
};

// const sessionTest = (req, res) => {
//   req.session.test ? req.session.test++ : (req.session.test = 1);
//   res.send(req.session.test.toString());
// };

// async function mail() {
//   const testing = await nodemailer.createTestAccount;
//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "jarvis.kulas4@ethereal.email",
//       pass: "kq3a3J79xP4pMzsUtX",
//     },
//   });
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <abc@gmail.com',
//     to: "hardik.parmar5@gmail.com, jarvis.kulas4@ethereal.email",
//     subject: "Hello ✔",
//     text: "Hello world?",
//     html: "<b>Hello world?</b>",
//   });
//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }
// mail();

// const transporter = nodemailer.createTransport({
//   host: "smtp-mail.outlook.com",
//   auth: {
//     user: "hardik.123.parmar@outlook.com",
//     pass: "12345678!@#",
//   },
// });
// let info = {
//   from: '"Hardik parmar" <hardik.123.parmar@outlook.com',
//   to: "hardik.parmar5@gmail.com",
//   subject: "Hello ✔",
//   text: "Hello world?",
//   // html: "<b>Hello world?</b>",
// };
// transporter.sendMail(info, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info.response);
// });

// console.log(moment.now());
// console.log(moment("2022-01-01"));
// console.log(moment("12-28-2022", "MM-DD-YY"));
// console.log(moment.utc("2016-12-24T23:35:01"));
// console.log(moment.utc("2016-12-24T23:35:01").format());
// console.log(moment("12 March, 2022", ["DDMMMMY", "MMMMDDY"]).format());
// console.log(moment().add(3, "hours"));
// console.log(moment("24/12/2022 09:15:00", "DD MM YYYY hh:mm:ss", true));
// console.log(moment("It is 2012-05-25", "YYYY-MM-DD").isValid());
// console.log(moment("It is 2012-05-25", "YYYY-MM-DD", true).isValid());
// console.log(moment("2012-05-25", "YYYY-MM-DD", true).isValid());
// console.log(moment("2012.05.25", "YYYY-MM-DD", true).isValid());
// var a = moment();
// var b = moment.utc();
// console.log(a.format());
// console.log(b);
// console.log(b.format());

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

// async function processing2() {
//   const a = await imageToBase64("./uploads/1650705537697--hi-tech.png");
//   console.log(a);
// }
// processing2();

// async function processing() {
//   const location =
//     "https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/shrek.jpeg";
//   const options = {
//     string: true,
//     headers: {
//       "User-Agent": "my-app",
//     },
//   };
//   const image = await encode(location, options);
//   console.log(image);
//   await decode(image, { fname: "./uploads2/" + moment(), ext: "jpeg" });
// }
// processing();

// console.log(JSON.stringify(imageInfo));
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, moment() + "--" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extName = filetypes.test(path.extname(file.originalname).toLowerCase());
  // console.log(path.extname(file.originalname).toLowerCase());
  const mimeType = filetypes.test(file.mimetype);
  // console.log(mimeType);
  if (mimeType && extName) {
    return cb(null, true);
  } else {
    return cb("Error: Images only");
  }
}

const picUpload = async (req, res) => {
  try {
    console.log(req.file);
    res.send("Image uploaded successfully");
  } catch (e) {
    res.send(e);
  }
};
const multiPicUpload = async (req, res) => {
  try {
    console.log(req.files);
    res.send("Images uploaded successfully");
  } catch (e) {
    res.send(e);
  }
};

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
    res.status(200).json(listById);
  } catch (error) {
    res.status(404).json({ msg: "An Error occured: " + error });
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
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json("Error Occured");
  }
};
const userUpdate = async (req, res) => {
  try {
    const userId = await users.findById(req.body.id);
    Object.assign(userId, req.body);
    await userId.save();
    res.status(200).json({ msg: `Product updated sucessfully.` });
  } catch (err) {
    res.status(404).json({ msg: "An error occured" + err });
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

// const userLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.json({ msg: "please enter username and password" });
//     }
//     const userLogin = await users.findOne({ email });
//     console.log(userLogin);

//     if (userLogin) {
//       const isMatch = await bcrypt.compare(password, userLogin.password);
//       // console.log(isMatch);
//       // token = await userLogin.generateAuthToken();
//       // console.log(token);
//       if (!isMatch) {
//         res.json({ msg: "Please enter correct credential " });
//       } else {
//         const payload = { email };
//         const token = jwt.sign(payload, secret);
//         // console.log(token);
//         res.json({ token });
//       }
//     } else {
//       res.json({ msg: "Please enter correct credential" });
//     }

//     // await users.findOne({ name: name }).then((userexist) => {
//     //   res.json({ msg: "user found" });
//     // });
//   } catch (e) {
//     res.json({ msg: "error: " + e });
//   }
// };
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   // console.log(bearerHeader);

//   if (typeof bearerHeader !== undefined) {
//     const bearer = bearerHeader.split(" ");
//     console.log(bearer[1]);
//     req.token = bearer[1];
//     jwt.verify(req.token, secret, (err, authData) => {
//       if (err) {
//         res.json({ result: err });
//       } else {
//         next();
//       }
//     });
//   } else {
//     res.json({ msg: "token not provided" });
//   }
// }

module.exports = {
  // createData,
  userList,
  userById,
  userRemove,
  userUpdate,
  userAdd,
  // userLogin,
  // verifyToken,
  picUpload,
  multiPicUpload,
  upload,
  // sessionTest,
  login,
  // auth,
};
