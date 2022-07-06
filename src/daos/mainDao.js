const mongoModel = require("../configs/mongoDB");
const errModel = require("../models/errModel");

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
