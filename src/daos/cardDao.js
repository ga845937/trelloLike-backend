const { pgModel } = require("../configs/pgDB");

module.exports.createCard = async function (createData) {
    return await pgModel.Card.create(createData);
};

module.exports.readCard = async function (readData) {
    return await pgModel.Card.findAndCountAll({
        where: readData
    });
};

module.exports.updateCard = async function (updateData) {
    const { id, ...updateValue } = updateData;
    return await pgModel.Card.update(
        updateValue,
        {
            where: {
                id
            }
        }
    );
};

// module.exports.updateCard = async function (updateData) {
//     return await pgModel.Card.update(
//         {
//             name: updateData.name,
//             positionNo: updateData.positionNo,
//             archive: updateData.archive
//         },
//         {
//             where: {
//                 id: updateData.id
//             }
//         }
//     );
// };

module.exports.deleteCard = async function (id) {
    return await pgModel.Card.destroy({
        where: id
    });
};