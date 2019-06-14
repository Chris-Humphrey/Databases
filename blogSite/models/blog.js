'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    abstract: DataTypes.STRING,
    body: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    imageURL: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  blog.associate = function(models) {
    // associations can be defined here
    models.blog.belongsTo(models.categories);
    models.blog.hasOne(models.author);
    models.blog.hasMany(models.comments);
  };
  return blog;
};