const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Receipt, Order }) {
      this.hasMany(Receipt, { foreignKey: 'userId' });
      this.hasMany(Order, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
