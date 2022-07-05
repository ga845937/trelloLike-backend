const jwt = require("jsonwebtoken");
const mainDao = require("../daos/mainDao");
const env = require("../../env");
const resModel = require("../models/resModel");

module.exports.genLoginInfo = async function () {
    const _id = await mainDao.saveNewUser();
    console.log(_id);
    const jwtToken = jwt.sign({ "_id": _id }, env.jwtSecret);
    return new resModel(jwtToken);
};

module.exports.testAsync = async function () {
    const daoRes = await mainDao.testAsync(2);
    return new resModel(daoRes);
};