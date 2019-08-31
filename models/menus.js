'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categoryId: DataTypes.INTEGER
  }, {});
  menus.associate = function (models) {
    // associations can be defined here
    menus.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      as: 'category_id'
    })

    menus.hasMany(models.orders, {
      foreignKey: 'menuId'
    })

  };
  return menus;
};