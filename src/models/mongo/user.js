const Mongoose = require("mongoose");
const env = require("../../../env");

module.exports = (mongoose) => {
    return mongoose.model("user", userDoc);
};

const userDoc = new Mongoose.Schema({
    userInfo: {
        name: String,
        age: Number
    },
    jwt: String,
    createdAt: { type: Date, expires: env.jwtTTL * 60, default: Date.now }
});