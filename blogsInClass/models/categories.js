'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    models.categories.hasMany(models.blog, {foreignKey: 'categoryID'});
  };
  return categories;
};