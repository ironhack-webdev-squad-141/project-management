const express = require("express");
const router = express.Router();

router.post("/test-endpoint", (req, res, next) => {
  res.json(req.body.challenge);
});

module.exports = router;
