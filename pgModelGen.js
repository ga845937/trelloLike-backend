const SequelizeAuto = require("sequelize-auto");
const env = require("./env");
const output = "./src/models/pg";

const auto = new SequelizeAuto(env.connPgDatabase, env.connPgUserName, env.connPgPassword, {
    host: env.connPgHost,
    dialect: "postgres",
    directory: output, // where to write files
    port: env.connPgPort,
    caseModel: "c", // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: "c", // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
        timestamps: false
        // ...options added to each model
    },
    lang: "es6"
});

auto.run();