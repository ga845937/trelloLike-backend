const jwt = require("jsonwebtoken");
const mainDao = require("../daos/mainDao");
const env = require("../../env");
const resModel = require("../models/resModel");

module.exports.genLoginInfo = async function () {
    const _id = await mainDao.saveNewUser();
    const jwtToken = jwt.sign({ "_id": _id }, env.jwtSecret);
    return new resModel(jwtToken);
};

module.exports.mainData = async function () {
    const res = await mainDao.mainData();
    return new resModel(res);
};
