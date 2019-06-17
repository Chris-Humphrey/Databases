'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn(
        'items',
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
