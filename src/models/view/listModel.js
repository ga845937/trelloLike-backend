const joi = require("joi");
const { pgModel } = require("../../configs/pgDB");

const createList = joi.object().keys({
    account: joi.string().max(50).required(),
    name: joi.string().max(50).required(),
    positionNo: joi.number().integer().positive().required(),
    archive: joi.boolean().default(false)
});

const readList = joi.object().keys({
    account: joi.string().max(50),
    name: joi.string().max(50),
    positionNo: joi.number().integer().positive(),
    archive: joi.boolean()
});

const updateList = joi.object().keys({
    id: joi.number().integer().positive().required(),
    name: joi.string().max(50),
    positionNo: joi.number().integer().positive(),
    archive: joi.boolean().default(false)
});

const deleteList = joi.object().keys({
    id: joi.number().integer().positive().required()
});

const description = {};
const listAttributes = pgModel.List.getAttributes();
for (const key in listAttributes) {
    description[key] = listAttributes[key].comment;
}

module.exports = {
    createList,
    readList,
    updateList,
    deleteList,
    description
};