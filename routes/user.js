const express = require("express");

const router = express.Router();
const user = require("../controllers/userController");

router.post("/login", user.loginUser);
router.post("/register", user.registerUser);
router.get("/", user.getUsers);
router.get("/getUser", user.getUser);
router.delete("/delete", user.deleteUser);

module.exports = router;
