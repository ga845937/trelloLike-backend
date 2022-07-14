const DataTypes = require("sequelize").DataTypes;
const _active = require("./active");
const _card = require("./card");
const _label = require("./label");
const _list = require("./list");
const _todolist = require("./todolist");

function initModels(sequelize) {
  const active = _active(sequelize, DataTypes);
  const card = _card(sequelize, DataTypes);
  const label = _label(sequelize, DataTypes);
  const list = _list(sequelize, DataTypes);
  const todolist = _todolist(sequelize, DataTypes);

  active.belongsTo(card, { as: "card", foreignKey: "card_id"});
  card.hasMany(active, { as: "actives", foreignKey: "card_id"});
  label.belongsTo(card, { as: "card", foreignKey: "card_id"});
  card.hasMany(label, { as: "labels", foreignKey: "card_id"});
  todolist.belongsTo(card, { as: "card", foreignKey: "card_id"});
  card.hasMany(todolist, { as: "todolists", foreignKey: "card_id"});
  card.belongsTo(list, { as: "list", foreignKey: "list_id"});
  list.hasMany(card, { as: "cards", foreignKey: "list_id"});

  return {
    active,
    card,
    label,
    list,
    todolist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
