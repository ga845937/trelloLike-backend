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
        const { error: joiErr } = listModel.createList.validate(req.body);
        if (joiErr) {
            throw new errModel(3, joiErr.message);
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
        const { error: joiErr } = listModel.readList.validate(req.query);
        if (joiErr) {
            throw new errModel(3, joiErr.message);
        }
        const resData = await listService.readList(req.query);
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
            type: "string",
            description: "帳號"
        }
        #swagger.parameters["name"] = {
            in: "query",
            type: "string",
            description: "清單名稱"
        }
        #swagger.parameters["positionNo"] = {
            in: "query",
            type: "integer",
            description: "清單位置"
        }
        #swagger.parameters["archive"] = {
            in: "query",
            type: "boolean",
            description: "封裝"
        }
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }
    */
};

module.exports.updateList = async function (req, res, next) {
    try {
        const { error: joiErr } = listModel.updateList.validate(req.query);
        if (joiErr) {
            throw new errModel(3, joiErr.message);
        }
        const resData = await listService.updateList(req.query);
        res.json(resData);
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
        #swagger.parameters["id"] = {
            in: "query",
            required: true,
            type: "string",
            description: "唯一辨識碼"
        }
        #swagger.parameters["name"] = {
            in: "query",
            type: "string",
            description: "清單名稱"
        }
        #swagger.parameters["positionNo"] = {
            in: "query",
            type: "integer",
            description: "清單位置"
        }
        #swagger.parameters["archive"] = {
            in: "query",
            type: "boolean",
            description: "封裝"
        }
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }        
    */
};

module.exports.deleteList = async function (req, res, next) {
    try {
        const { error: joiErr } = listModel.deleteList.validate(req.query);
        if (joiErr) {
            throw new errModel(3, joiErr.message);
        }
        const resData = await listService.deleteList(req.query);
        res.json(resData);
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
        #swagger.parameters["id"] = {
            in: "query",
            required: true,
            type: "string",
            description: "唯一辨識碼"
        }
        #swagger.responses[200] = {
            description: "成功",
            schema: { $ref: "#/components/schemas/resSchema" }
        }        
    */
};