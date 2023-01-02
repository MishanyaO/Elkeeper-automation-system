const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate({ Receipt }) {
      this.hasMany(Receipt, { foreignKey: 'tableId' });
    }
  }
  Table.init({
    status: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
