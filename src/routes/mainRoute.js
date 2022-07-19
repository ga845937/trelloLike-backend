const express = require("express");
const router = express.Router();
const mainService = require("../services/mainService");

router.get("/login", async (req, res, next) => {
  /* 
    #swagger.summary = "登入"
    #swagger.description = "登入"	
  */
  try {
    const b = await mainService.genLoginInfo();
    console.log(b);
    res.json(b);
  } catch (err) {
    next(err);
  }
});

module.exports = router;