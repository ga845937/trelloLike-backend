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
        references: {
          model: "card",
          key: "id"
        },
        field: "card_id"
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      msg: {
        type: DataTypes.STRING(1000),
        allowNull: true
      },
      upDate: {
        type: DataTypes.DATE,
        allowNull: true,
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
