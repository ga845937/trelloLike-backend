const resModel = require("../models/resModel");
const listDao = require("../daos/listDao");

module.exports.createListSer = async function (createData) {
    await listDao.createListDao(createData);
    return new resModel();
};

module.exports.readList = async function (readData) {
    const res = await listDao.readListDao(readData);
    return new resModel(res);
};