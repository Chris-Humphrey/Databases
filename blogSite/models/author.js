'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    contactInfo: DataTypes.INTEGER
  }, {});
  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.blog);
  };
  return author;
};