'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const data = [{
      menuId: 3,
      transactionId: 1,
      qty: 1,
      price: 2500,
      status: 1
    }]

    return queryInterface.bulkInsert('orders', data, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('orders', null, {});
  }
};
