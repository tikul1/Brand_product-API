const express = require("express");
const router = express.Router();
const superController = require("../controller/superController");

router.get("/", superController.superList);

module.exports = router;
