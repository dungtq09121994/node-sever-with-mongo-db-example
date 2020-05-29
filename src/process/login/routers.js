const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require('./validator');

router.post('/register', controller.register);
 
module.exports = router;