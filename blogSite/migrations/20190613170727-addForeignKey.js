'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'blogs',
      'categoriesId',
      {
        type:Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('items', 'categoriesId');

  }
};
