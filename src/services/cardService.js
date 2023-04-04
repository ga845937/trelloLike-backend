const resModel = require("../models/resModel");
const cardDao = require("../daos/cardDao");

module.exports.createCard = async function (createData) {
    const res = await cardDao.createCard(createData);
    return new resModel(res.id);
};

module.exports.readCard = async function (readData) {
    const res = await cardDao.readCard(readData);
    return new resModel(res);
};

module.exports.updateCard = async function (updateData) {
    await cardDao.updateCard(updateData);
    return new resModel();
};

module.exports.deleteCard = async function (id) {
    await cardDao.deleteCard(id);
    return new resModel();
};