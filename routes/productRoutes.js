const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.index);
router.get("/search/:id", productController.searchProduct);
router.post("/add", productController.add);
router.put("/update", productController.update);
router.delete("/remove/:id", productController.remove);
router.get("/searchp/", productController.search);

module.exports = router;
