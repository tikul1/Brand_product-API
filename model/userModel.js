// const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
