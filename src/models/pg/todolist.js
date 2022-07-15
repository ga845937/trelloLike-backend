const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Todolist.init(sequelize, DataTypes);
}

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
      references: {
        model: 'card',
        key: 'id'
      },
      field: 'card_id'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    appoint: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    positionNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'position_no'
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_date'
    }
  }, {
    sequelize,
    tableName: 'todolist',
    schema: 'public',
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
