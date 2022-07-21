const resModel = require("../models/resModel");
const listDao = require("../daos/listDao");

module.exports.createList = async function (createData) {
    await listDao.createList(createData);
    return new resModel();
};

module.exports.readList = async function (readData) {
    const res = await listDao.readList(readData);
    return new resModel(res);
};

module.exports.updateList = async function (updateData) {
    await listDao.updateList(updateData);
    return new resModel();
};

module.exports.deleteList = async function (id) {
    await listDao.deleteList(id);
    return new resModel();
};