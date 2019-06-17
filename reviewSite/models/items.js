'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  items.associate = function(models) {
    // associations can be defined here
    models.items.belongsTo(models.categories)
  };
  return items;
};