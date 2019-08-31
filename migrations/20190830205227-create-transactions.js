'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tableNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      finishedTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      subtotal: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      discount: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      serviceCharge: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      tax: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      total: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      isPaid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions');
  }
};