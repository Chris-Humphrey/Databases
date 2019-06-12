'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [{
        title: 'Greek',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mexican',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chinese',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'American',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ethiopian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Indian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Thai',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categories', null, {});
    
  }
};
