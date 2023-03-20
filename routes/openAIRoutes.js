const express = require("express");
const { generateAIImage } = require("../controllers/OpenAIController");
const router = express.Router();

router.post("/generate-ai-image", generateAIImage);

module.exports = router;
