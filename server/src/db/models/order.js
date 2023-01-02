const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Menu, Receipt, User }) {
      this.belongsTo(Menu, { foreignKey: 'position' });
      this.belongsTo(Receipt, { foreignKey: 'receiptId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Order.init({
    position: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    receiptId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
