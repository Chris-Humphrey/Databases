'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    abstract: DataTypes.STRING,
    body: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    imageURL: DataTypes.STRING,
    authorID: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER
  }, {
    // PREVENTS PLURALIZATION OF A COLUMN
    freezeTableName: true
  });
  blog.associate = function(models) {
    // associations can be defined here
    // models.blog.belongsTo(models.categories);
    // will add categoryId to blog table
    models.blog.belongsTo(models.categories, {foreignKey: 'categoryID'});
    // now it will be the correct key
    // models.blog.belongsTo(models.author);
    // will add authorId
    models.blog.belongsTo(models.author, {foreignKey: 'authorID'});
    // hasMany is kind of backwards
    models.blog.hasMany(models.comments, {foreignKey: 'blogID'});
  };
  return blog;
};