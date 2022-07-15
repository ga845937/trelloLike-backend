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
        primaryKey: true
      },
      account: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      positionNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "position_no"
      },
      archive: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
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
