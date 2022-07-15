const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Card.init(sequelize, DataTypes);
}

class Card extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'list',
        key: 'id'
      },
      field: 'list_id'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    positionNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'position_no'
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
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_date'
    }
  }, {
    sequelize,
    tableName: 'card',
    schema: 'public',
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
