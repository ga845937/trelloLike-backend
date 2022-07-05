const mongoose = require("mongoose");
const env = require("../../env");

// mongoDB schema
module.exports = {
    userSchema: new mongoose.Schema({
        userInfo: {
            name: String,
            age: Number
        },
        jwt: String,
        createdAt: { type: Date, expires: env.jwtTTL * 60, default: Date.now }
    })
};
