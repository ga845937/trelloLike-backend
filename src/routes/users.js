const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/:id", (req, res) => {
  console.log(req);
  res.json({ "user": "user" });
});

module.exports = router;