const express = require("express");
const router = express.Router();
const mainService = require("../services/mainService");

router.get("/login", async (req, res, next) => {
  /* 
    #swagger.summary = "登入"
    #swagger.description = "登入"
    #swagger.tags = ['Main']
  */
  try {
    const b = await mainService.genLoginInfo();
    console.log(b);
    res.json(b);
  } catch (err) {
    next(err);
  }
});

router.get("/mainData", async (req, res, next) => {
  /* 
    #swagger.summary = "同時取List、Card資料"
    #swagger.description = "Card的資料會被包在List裡"
    #swagger.tags = ['Main']
  */
 try {
   const rtnData = await mainService.mainData();
   console.log(rtnData);
   res.json(rtnData);
 } catch (err) {
   next(err);
 }
});

module.exports = router;