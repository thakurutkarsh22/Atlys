const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/authController");
const {
  validateUserLogin,
} = require("../middlewares/validateUserLogin.middleware");

router.post("/signup", createUser);

router.post("/login", validateUserLogin, loginUser);

module.exports = router;
