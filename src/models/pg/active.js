const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return Active.init(sequelize, DataTypes);
};

class Active extends Sequelize.Model {
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
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活動名稱"
    },
    msg: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "活動留言訊息"
    },
    upDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "活動更新時間",
      field: "up_date"
    }
  }, {
    sequelize,
    tableName: "active",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "active_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
