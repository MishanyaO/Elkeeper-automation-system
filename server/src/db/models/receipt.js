const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    static associate({ User, Table, Order }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Table, { foreignKey: 'tableId' });
      this.hasMany(Order, { foreignKey: 'receiptId' });
    }
  }
  Receipt.init({
    total: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Receipt',
  });
  return Receipt;
};
