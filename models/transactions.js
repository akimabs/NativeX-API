'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    tableNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.TIME,
    subtotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    serviceCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    isPaid: DataTypes.INTEGER
  }, {});
  transactions.associate = function (models) {
    // associations can be defined here
    transactions.hasMany(models.orders, {
      foreignKey: 'transactionId'
    })
  };
  return transactions;
};