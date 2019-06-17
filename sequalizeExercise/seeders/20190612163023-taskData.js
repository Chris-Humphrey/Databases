'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('tasks', [{
        title: 'grocery shopping',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        title: 'have lunch with jason',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        title: 'plan birthday party',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },
      {
        title: 'walk cat',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('tasks', null, {});
  }
};
