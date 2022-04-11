const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.userList);
router.get("/searchuser/:id", userController.userById);
router.post("/adduser", userController.userAdd);
router.put("/updateuser", userController.userUpdate);
router.delete("/removeuser/:id", userController.userRemove);

module.exports = router;
