const joi = require("joi");
const { pgModel } = require("../../configs/pgDB");

//#region public joiSchema
const id = joi.number().integer().positive().required();
const listId = joi.number().integer().positive().required();
const name = joi.string().max(50);
const describe = joi.string().max(1000);
const positionNo = joi.number().integer().positive();
const archive = joi.boolean().default(false);
const follow = joi.boolean().default(false);
const status = joi.string().max(1);
const startDate = joi.date();
const endDate = joi.date();
// #endregion public joiSchema

const createCard = joi.object().keys({
    listId,
    name: name.required(),
    describe,
    positionNo,
    archive,
    follow,
    status,
    startDate,
    endDate
});

const readCard = joi.object().keys({
    listId,
    name,
    positionNo,
    archive
});

const updateCard = joi.object().keys({
    id,
    listId,
    name,
    describe,
    positionNo,
    archive,
    follow,
    status,
    startDate,
    endDate
});

const deleteCard = joi.object().keys({
    id
});

const description = {};
const cardAttributes = pgModel.Card.getAttributes();
for (const key in cardAttributes) {
    description[key] = cardAttributes[key].comment;
}

module.exports = {
    createCard,
    readCard,
    updateCard,
    deleteCard,
    description
};