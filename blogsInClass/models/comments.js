'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    blogID: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    models.comments.belongsTo(models.blog, {foreignKey: 'blogID'});
  };
  return comments;
};