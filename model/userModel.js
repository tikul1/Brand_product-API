const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // enum: ["hardik", "tikul"],
    required: true,
    trim: true,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    validate(Value) {
      if (Value < 0) {
        throw new Error("age should be positive");
      }
    },
  },
  password: {
    type: String,
    minlength: [6, "minimum allowed length is 6"],
    required: true,
  },

  confirmPassword: {
    type: String,
    minlength: 6,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  console.log(`${this.password}`);
  this.password = await bcrypt.hash(this.password, 10);

  next();
});
userSchema.methods.generateAuthToken = async function () {
  try {
    let SECRET_KEY = "abc";
    let token = jwt.sign({ _id: this._id }, SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("User", userSchema);
