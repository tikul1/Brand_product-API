const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.index);
router.get("/search/:id", productController.search);
router.post("/add", productController.add);
router.put("/update", productController.update);
router.delete("/remove/:id", productController.remove);

module.exports = router;
