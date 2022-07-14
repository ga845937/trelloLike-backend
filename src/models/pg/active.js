const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return active.init(sequelize, DataTypes);
}

class active extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'card',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    msg: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    up_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'active',
    schema: 'public',
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
