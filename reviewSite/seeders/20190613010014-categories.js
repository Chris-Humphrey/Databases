'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [{
        title: 'Clothing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Books',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Movies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Home & Garden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pet Supplies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Beauty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Toys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Automotive',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categories', null, {});

  }
};
