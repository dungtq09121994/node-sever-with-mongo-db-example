const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/list", controller.listUser);
router.post("/user", controller.user);
router.post("/add", controller.addUser);
router.post("/delete", controller.deleteUser);
router.post("/update", controller.updateUserById);

module.exports = router;
