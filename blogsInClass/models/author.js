'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    contactInfo: DataTypes.STRING
  }, {
      // PREVENTS PLURALIZATION OF A COLUMN
      freezeTableName: true
  });
  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.blog, {foreignKey: 'authorID'});
  };
  return author;
};