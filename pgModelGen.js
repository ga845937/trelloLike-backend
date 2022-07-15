const SequelizeAuto = require("sequelize-auto");
const env = require("./env");
const output = "./src/models/pg";
const { rmSync } = require("fs");

const auto = new SequelizeAuto(env.connPgDatabase, env.connPgUserName, env.connPgPassword, {
    host: env.connPgHost,
    dialect: "postgres",
    directory: output,
    port: env.connPgPort,
    caseModel: "p",
    caseFile: "c",
    caseProp: "c",
    singularize: true,
    additional: {
        timestamps: false
    },
    lang: "es6"
});

rmSync(output, { recursive: true, force: true });
auto.run();