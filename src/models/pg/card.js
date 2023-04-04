const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return Card.init(sequelize, DataTypes);
};

class Card extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "清單列表FK",
      references: {
        model: "list",
        key: "id"
      },
      field: "list_id"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "卡片名稱"
    },
    describe: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "卡片內容"
    },
    positionNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "卡片位置",
      field: "position_no"
    },
    archive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "封裝"
    },
    follow: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "卡片追蹤"
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "卡片狀態"
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "卡片開始時間",
      field: "start_date"
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "卡片結束時間",
      field: "end_date"
    }
  }, {
    sequelize,
    tableName: "card",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "card_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
