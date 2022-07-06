const Sequelize = require("sequelize");
const initModels = require("../models/pg/init-models");
const env = require("../../env");

const connPgOptions = {
    host: env.connPgHost,
    port: env.connPgPort,
    dialect: "postgres",
    logging: true,
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
};

const sequelizeOption = new Sequelize(
    env.connPgDatabase,
    env.connPgUserName,
    env.connPgPassword,
    connPgOptions);

module.exports = {
    sequelizeOption: sequelizeOption,
    pgModel: initModels(sequelizeOption)
};