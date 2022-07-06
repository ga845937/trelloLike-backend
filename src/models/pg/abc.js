const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abc.init(sequelize, DataTypes);
}

class abc extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    test2D: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'abc',
    schema: 'public',
    timestamps: false
  });
  }
}
