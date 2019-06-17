'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [{
        title: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Education',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Gaming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Finance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Politics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'News',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lifestyle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Entertainment',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
