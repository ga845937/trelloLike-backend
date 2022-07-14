const mongoModel = require("../configs/mongoDB");
const errModel = require("../models/errModel");
const resModel = require("../models/resModel");
const { pgModel } = require("../configs/pgDB");

/**
 * List列表新增
 * @param {JSON} data 
 * @returns 列表資訊
 */
module.exports.insertNewList = function (data) {
    return new Promise((resolve, reject) => {
        const Newlist = pgModel.list.create({
            account: data.account,
            name: data.name,
            position_no: data.position_no,
            archive: data.archive
        });

        Newlist.then((success) => {
            if (success) {
                resolve({
                    "帳號": data.account,
                    "名稱": data.name,
                    "位置": data.position_no,
                    "封存": data.archive
                    });
            } else {
                return reject(new errModel(50));
            }
        });
    });
};

module.exports.queryList = function (data) {
    return new Promise((resolve, reject) => {
        const SelectList = pgModel.list.findAll({
            where: {
                account: data.account
            }
        });

        SelectList.then((result) => {
            if (result) {
                resolve(result);
            } else {
                return reject(new errModel(51));
            }
        });
    });
};

module.exports.saveNewUser = function () {
    return new Promise((resolve, reject) => {
        const uesrDoc = new mongoModel.user({
            userInfo: {
                name: "JayKuo",
                age: 28
            }
        });

        uesrDoc.save((err, user) => {
            if (err) {
                return reject(new errModel(1, err));
            }
            resolve(user._id);
        });
    });
};

module.exports.testAsync = function (b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (1 > b) {
                resolve("OK");
            } else {
                const err = new errModel(98);
                reject(err);
            }
        }, 2000);
    });
};
