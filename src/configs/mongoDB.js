const mongoose = require("mongoose");
const env = require("../../env");
const mongoSchema = require("../models/mongoSchema");

const connMongo = mongoose.createConnection(
    env.connMongoUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

connMongo.on("open", () => {
    console.log("開啟 mongodb 連線");
});

connMongo.on("err", (err) => {
    console.log("err:" + err);
});

// 通過connection和schema建立model
const mongoModel = {};
for (const key in mongoSchema) {
    const modelName = key.replace("Schema", "Model");
    const collectionName = key.replace("Schema", "");
    mongoModel[modelName] = connMongo.model(collectionName, mongoSchema[key]);
}

module.exports = mongoModel;