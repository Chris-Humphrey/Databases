'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn(
        'dishes',
        'categoriesId',
        {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.removeColumn('dishes', 'categoriesId');

  }
};
