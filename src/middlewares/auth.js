const jwt = require("jsonwebtoken");
const env = require("../../env");
const errModel = require("../models/errModel");
const resModel = require("../models/resModel");
const connMongo = require("../configs/mongoDB");

module.exports.authJWT = async function (req, res, next) {
    const reqJWT = req.headers.authorization;

    if (reqJWT === undefined) {
        const resData = new resModel(null, 2);
        return res.json(resData);
    }

    try {
        const decodeJWT = jwt.verify(reqJWT, env.jwtSecret);
        const userDoc = await connMongo.user.findOne({ _id: decodeJWT._id });
        if (userDoc === null) {
            const resData = new resModel(null, 2);
            return res.json(resData);
        }
        req.userInfo = userDoc.userInfo.toJSON();
        next();
    } catch (err) {
        throw new errModel(2, err);
    }
};