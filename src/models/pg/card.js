const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return card.init(sequelize, DataTypes);
};

class card extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      list_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "list",
          key: "id"
        }
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      describe: {
        type: DataTypes.STRING(1000),
        allowNull: true
      },
      position_no: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      archive: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      follow: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      status: {
        type: DataTypes.STRING(1),
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true
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
