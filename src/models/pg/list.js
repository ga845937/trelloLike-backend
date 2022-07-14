const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return list.init(sequelize, DataTypes);
}

class list extends Sequelize.Model {
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
    position_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    archive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'list',
    schema: 'public',
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
