'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    const data = [
      {
        name: "Telur Gulung Anjay",
        price: 10.000,
        categoryId: 1
      },
      {
        name: "Nasi Goreng",
        price: 21.000,
        categoryId: 2
      },
      {
        name: "Es Teh Gembira",
        price: 2.500,
        categoryId: 3
      },
    ]

    return queryInterface.bulkInsert('menus', data, {});
  },

  down: (queryInterface, Sequelize) => {
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete('menus', null, {});

  }
};
