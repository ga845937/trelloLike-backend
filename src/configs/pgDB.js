const Sequelize = require("sequelize");
const env = require("../env");

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

const pgDB = new Sequelize(
    env.connPgDatabase,
    env.connPgUserName,
    env.connPgPassword,
    connPgOptions);

module.exports = pgDB;