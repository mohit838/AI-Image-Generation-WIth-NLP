const express = require("express");
const router = express.Router();

router.post("/generate-ai-image", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

module.exports = router;
