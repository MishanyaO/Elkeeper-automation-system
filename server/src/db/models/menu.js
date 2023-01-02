const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'position' });
    }
  }
  Menu.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};
