const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controller/userController");
const { initializingPassport } = require("../helpers/passportHelper");

initializingPassport(passport);

router.get("/", userController.userList);
// router.get("/", userController.verifyToken, userController.userList);
router.get("/searchuser/:id", userController.userById);
router.post("/adduser", userController.userAdd);
router.put("/updateuser", userController.userUpdate);
router.delete("/removeuser/:id", userController.userRemove);
// router.post("/userlogin", userController.userLogin);
router.post(
  "/picupload",
  userController.upload.single("image"),
  userController.picUpload
);
router.post(
  "/multipicupload",
  userController.upload.array("images", 2),
  userController.multiPicUpload
);
// router.get("/test", userController.sessionTest);
router.post("/", passport.authenticate("local"), userController.login);

module.exports = router;
