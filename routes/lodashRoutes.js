const express = require("express");
const router = express.Router();
const lodashController = require("../controller/lodashConroller");

router.get("/lodash", lodashController._);

module.exports = router;
