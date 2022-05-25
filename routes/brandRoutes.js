const express = require("express");
const router = express.Router();
const brandController = require("../controller/brandController");

router.get("/", brandController.dataList);
router.get("/brandlist", brandController.brandList);
router.post("/brandadd", brandController.brandAdd);
router.delete("/brandremove/:id", brandController.brandRemove);
router.put("/brandupdate", brandController.brandUpdate);

module.exports = router;
