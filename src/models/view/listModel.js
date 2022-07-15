const joi = require("joi");

const createList = {
    createListJoi: joi.object().keys({
        account: joi.string().max(50).required(),
        name: joi.string().max(50).required(),
        positionNo: joi.number().integer().positive().required(),
        archive: joi.boolean().default(false)
    }),
    createListDescription: {
        account: "帳號",
        name: "名字",
        positionNo: "位置",
        archive: "檔案"
    }
};

module.exports = {
    createList
};