const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return label.init(sequelize, DataTypes);
}

class label extends Sequelize.Model {
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
      type: DataTypes.STRING(50),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'label',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "label_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
