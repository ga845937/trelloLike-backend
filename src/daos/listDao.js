const { pgModel } = require("../configs/pgDB");

module.exports.createList = async function (createData) {
    return await pgModel.List.create(createData);
};

module.exports.readList = async function (readData) {
    return await pgModel.List.findAndCountAll({
        where: readData
    });
};

module.exports.updateList = async function (updateData) {
    const { id, ...updateValue } = updateData;
    return await pgModel.List.update(
        updateValue,
        {
            where: {
                id
            }
        }
    );
};

module.exports.deleteList = async function (id) {
    return await pgModel.List.destroy({
        where: id
    });
};