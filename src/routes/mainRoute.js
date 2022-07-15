const express = require("express");
const router = express.Router();
const mainService = require("../services/mainService");

router.get("/login", async (req, res, next) => {
  try {
    const b = await mainService.genLoginInfo();
    console.log(b);
    res.json(b);
  } catch (err) {
    next(err);
  }
  /* 
    #swagger.summary = "登入"
    #swagger.description = "登入"	
    #swagger.tags = ['main']
    #swagger.produces = ["application/json"]
    #swagger.responses[200] = {
      description: "成功",
      schema: { $ref: "#/components/schemas/resSchema" }
    }
  */
});

router.get("/test", async (req, res, next) => {
  /* 
    #swagger.summary = "test"
    #swagger.description = "test"	
    #swagger.tags = ['main']
    #swagger.security = [{
            "jwt": []
    }] 
    #swagger.produces = ["application/json"]
    #swagger.parameters["name"] = {
      required: true,
      in: "query",
      description: "User Name.",
      type: "string"
    }
    #swagger.parameters["age"] = {
      in: "query",
      description: "User Age.",
      type: "number"
    }
  */
  try {
    const test = await mainService.testAsync();
    res.json(test);
  } catch (err) {
    next(err);
  }
});

router.post("/test", async (req, res, next) => {
  /* 
    #swagger.summary = "test"
    #swagger.description = "test"	
    #swagger.tags = ['main']
    #swagger.security = [{
            "jwt": []
    }] 
    #swagger.produces = ["application/json"]
    #swagger.parameters["loginCount"] = {
      required: true,
      in: "query",
      description: "loginCount",
      type: "string"
    }
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