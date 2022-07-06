const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ttt.init(sequelize, DataTypes);
}

class ttt extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tt: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    bb: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    abcg: {
      type: DataTypes.JSON,
      allowNull: true
    },
    God: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ttt',
    schema: 'public',
    timestamps: false
  });
  }
}
