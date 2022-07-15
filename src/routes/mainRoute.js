const express = require("express");
const router = express.Router();
const mainService = require("../services/mainService");
const authMiddleware = require("../middlewares/auth");

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

router.get("/test", [authMiddleware.authJWT], async (req, res, next) => {
  /* 
    #swagger.summary = "test"
    #swagger.description = "test"	
    #swagger.security = [{
            "jwt": []
    }] 
    #swagger.parameters["name"] = {
        in: "query",
        description: "User Name.",
        required: true,
        type: "String"
    }
    #swagger.parameters["age"] = {
      in: "query",
      description: "User Age.",
      type: "Number"
    }
  */
  try {
    const test = await mainService.testAsync();
    res.json(test);
  } catch (err) {
    next(err);
  }
});

router.get("/queryList", async (req, res, next) => {
  /* 
    #swagger.summary = "列表查詢"
    #swagger.description = "列表查詢測試"	
    #swagger.security = [{
            "jwt": []
    }] 
    #swagger.parameters["account"] = {
        in: "query",
        description: "User Account.",
        required: true,
        type: "String"
    }
  */
  try {
    const data = req.body;
    const queryList = await mainService.queryList(data);
    res.json(queryList);
  } catch (err) {
    next(err);
  }
});

router.post("/insertList", async (req, res, next) => {
  /* 
    #swagger.summary = "列表新增"
    #swagger.description = "列表新增測試"	
    #swagger.security = [{
            "jwt": []
    }] 
    #swagger.requestBody = {
      required: true,
      "@content" : {
        "application/json": {
          schema: {
            type: "object",
            properties: {
                account: {
                    type: "string"
                },
                name: {
                    type: "string"
                },
                position_no: {
                    type: "number"
                },
                archive:{
                    type: "boolean",
                    default: "false"
                }
            },
            required: ["account", "name", "position_no"]
          }
        }
      }
    }

  */
  try {
    const data = req.body;
    const insertList = await mainService.insertList(data);
    res.json(insertList);
  } catch (err) {
    next(err);
  }
});

router.post("/test", [authMiddleware.authJWT], async (req, res, next) => {
  /* 
    #swagger.summary = "test"
    #swagger.description = "test"	
    #swagger.security = [{
            "jwt": []
    }] 
    #swagger.requestBody = {
      required: true,
      "@content" : {
        "application/json": {
          schema: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                age: {
                    type: "number"
                },
                word: {
                    type: "string"
                }
            },
            required: ["name", "age"]
          }
        }
      }
    }

  */
  try {
    const test = await mainService.testAsync();
    res.json(test);
  } catch (err) {
    next(err);
  }
});
module.exports = router;