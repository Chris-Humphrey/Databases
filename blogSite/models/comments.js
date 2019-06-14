'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    title: DataTypes.STRING,
    msg: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    blogId: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    models.comments.belongsTo(models.blog);
  };
  return comments;
};