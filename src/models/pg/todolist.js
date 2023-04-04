const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return Todolist.init(sequelize, DataTypes);
};

class Todolist extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "卡片列表FK",
      references: {
        model: "card",
        key: "id"
      },
      field: "card_id"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "待辦事項名稱"
    },
    appoint: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "待辦事項指定人員(帳號)"
    },
    positionNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "待辦事項位置",
      field: "position_no"
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "待辦事項狀態"
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "待辦事項結束時間",
      field: "end_date"
    }
  }, {
    sequelize,
    tableName: "todolist",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "todolist_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
