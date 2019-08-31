'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        tableNumber: 2,
        finishedTime: '00:30:00',
        subtotal: 20000,
        discount: 0,
        serviceCharge: 0,
        tax: 0,
        total: 20000,
        isPaid: 1
      }
    ]
    return queryInterface.bulkInsert('transactions', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  }
};
