const listModel = require("../models/view/listModel");
const listService = require("../services/listService");

const errModel = require("../models/errModel");

module.exports.createList = async function (req, res, next) {
    try {
        // const test = {
        //     "account": "123",
        //     "name": "string",
        //     "positionNo": 0,
        //     "archive": false
        // };
        const { error } = listModel.createList.createListJoi.validate(req.body);
        if (error) {
            throw new errModel(3, error.message);
        }
        const resData = await listService.createList(req.body);
        res.json(resData);
    } catch (err) {
        next(err);
    }

    /* @swagger comment
        #swagger.description = "新增List"
        #swagger.summary = "新增List"
        #swagger.tags = ['list']
        #swagger.security = [{
            "jwt": []
        }]
        #swagger.requestBody = { 
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/createListSchema" }   
                }
            }
        }
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }
    */
};

module.exports.readList = async function (req, res, next) {
    try {
        const resData = await listService.readList(req.body);
        res.json(resData);
    } catch (err) {
        next(err);
    }
    /* @swagger comment
        #swagger.description = "查詢List"
        #swagger.summary = "查詢List"
        #swagger.tags = ['list']
        #swagger.security = [{
            "jwt": []
        }]
        #swagger.parameters["account"] = {
            in: "query",
            description: "account",
            type: "string"
        }        
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }
    */
};

module.exports.updateList = async function (req, res, next) {
    try {
        console.log(req.body);
        res.json();
    } catch (err) {
        next(err);
    }
    /* @swagger comment
        #swagger.description = "更新List"
        #swagger.summary = "更新List"
        #swagger.tags = ['list']
        #swagger.security = [{
            "jwt": []
        }]
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }        
    */
};

module.exports.deleteList = async function (req, res, next) {
    try {
        console.log(req.query);
        res.json();
    } catch (err) {
        next(err);
    }
    /* @swagger comment
        #swagger.description = "刪除List"
        #swagger.summary = "刪除List"
        #swagger.tags = ['list']
        #swagger.security = [{
            "jwt": []
        }]
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }        
    */
};