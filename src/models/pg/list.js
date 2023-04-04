const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return List.init(sequelize, DataTypes);
};

class List extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "清單唯一辨識碼",
      primaryKey: true
    },
    account: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "帳號"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "清單名稱"
    },
    positionNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "清單位置",
      field: "position_no"
    },
    archive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "封裝"
    }
  }, {
    sequelize,
    tableName: "list",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "list_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
