const DataTypes = require("sequelize").DataTypes;
const _Active = require("./active");
const _Card = require("./card");
const _Label = require("./label");
const _List = require("./list");
const _Todolist = require("./todolist");

function initModels(sequelize) {
  const Active = _Active(sequelize, DataTypes);
  const Card = _Card(sequelize, DataTypes);
  const Label = _Label(sequelize, DataTypes);
  const List = _List(sequelize, DataTypes);
  const Todolist = _Todolist(sequelize, DataTypes);

  Active.belongsTo(Card, { as: "card", foreignKey: "cardId"});
  Card.hasMany(Active, { as: "actives", foreignKey: "cardId"});
  Label.belongsTo(Card, { as: "card", foreignKey: "cardId"});
  Card.hasMany(Label, { as: "labels", foreignKey: "cardId"});
  Todolist.belongsTo(Card, { as: "card", foreignKey: "cardId"});
  Card.hasMany(Todolist, { as: "todolists", foreignKey: "cardId"});
  Card.belongsTo(List, { as: "list", foreignKey: "listId"});
  List.hasMany(Card, { as: "cards", foreignKey: "listId"});

  return {
    Active,
    Card,
    Label,
    List,
    Todolist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
