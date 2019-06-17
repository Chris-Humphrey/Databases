'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  
  // 'models' passes all of the models
  user.associate = function(models) {
    // this creates a userId inside of task table
    models.user.hasMany(models.task)
  };
  return user;
};