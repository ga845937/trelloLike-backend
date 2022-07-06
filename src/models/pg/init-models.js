const DataTypes = require("sequelize").DataTypes;
const _abc = require("./abc");
const _ttt = require("./ttt");

function initModels(sequelize) {
  const abc = _abc(sequelize, DataTypes);
  const ttt = _ttt(sequelize, DataTypes);


  return {
    abc,
    ttt,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
