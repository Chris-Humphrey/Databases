'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [{
        title: 'Javascript',
        description: "",
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Node',
        description: "",
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'React',
        description: "",
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ruby',
        description: "",
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categories', null, {});
  }
};
