const { pgModel } = require("../configs/pgDB");

module.exports.createListDao = async function (createData) {
    return await pgModel.List.create(createData);
};

module.exports.readListDao = async function (readData) {
    return await pgModel.List.findAndCountAll({
        where: readData
    });
};
