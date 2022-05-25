const express = require("express");
const router = express.Router();
const dataController = require("../controller/dataController");

router.get("/", dataController.findByGender);

module.exports = router;
