const express = require("express");
const {
  getUser,
  signUp,
  login,
  getUserById,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUser);
router.post("/signup", signUp);
router.post("/login", login);
router.get("/users/:id", getUserById);

module.exports = router;
