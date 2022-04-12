// const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
});

module.exports = mongoose.model("User", userSchema);
