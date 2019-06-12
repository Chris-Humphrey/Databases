'use strict';
module.exports = (sequelize, DataTypes) => {
  const dishes = sequelize.define('dishes', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    course: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  dishes.associate = function(models) {
    // associations can be defined here
    models.dishes.belongsTo(models.categories)
  };
  return dishes;
};