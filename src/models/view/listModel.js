const joi = require("joi");
const { pgModel } = require("../../configs/pgDB");

//#region public joiSchema
const id = joi.number().integer().positive().required();
const account = joi.string().max(50);
const name = joi.string().max(50);
const positionNo = joi.number().integer().positive();
const archive = joi.boolean().default(false);
// #endregion public joiSchema

const createList = joi.object().keys({
    account,
    name: name.required(),
    positionNo,
    archive
});

const readList = joi.object().keys({
    account,
    name,
    positionNo,
    archive
});

const updateList = joi.object().keys({
    id,
    name,
    positionNo,
    archive
});

const deleteList = joi.object().keys({
    id
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