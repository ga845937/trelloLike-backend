const joi = require("joi");
const { pgModel } = require("../../configs/pgDB");

const createCard = joi.object().keys({
    listId: joi.number().integer().positive().required(),
    name: joi.string().max(50).required(),
    describe: joi.string().max(1000),
    positionNo: joi.number().integer().positive().required(),
    archive: joi.boolean().default(false),
    follow: joi.boolean().default(false),
    status: joi.string().max(1).required(),
    startDate: joi.date(),
    
});