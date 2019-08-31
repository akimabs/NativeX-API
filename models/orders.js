'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};