const express = require("express");
const router = express.Router();
const queryPracModel = require("../controller/queryPracController");

router.get("/", queryPracModel.animalList);
router.post("/animaladd", queryPracModel.animalAdd);

module.exports = router;
