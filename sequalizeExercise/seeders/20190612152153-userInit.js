'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        firstName: 'Alfie',
        lastName: 'Santos',
        email: 'santos@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Dao',
        email: 'dao@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tarek',
        lastName: 'Beb',
        email: 'beb@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Chris',
        lastName: 'Humphrey',
        email: 'humphrey@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('users', null, {});
    
  }
};
