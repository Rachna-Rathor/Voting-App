const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const voteController = require("../controllers/voteControllers");

router.post("/vote/:id", authMiddleware, voteController);

module.exports = router;
