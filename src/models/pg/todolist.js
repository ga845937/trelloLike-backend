const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return todolist.init(sequelize, DataTypes);
}

class todolist extends Sequelize.Model {
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
    appoint: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    position_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
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
