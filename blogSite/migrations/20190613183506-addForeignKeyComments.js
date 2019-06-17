'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return (
      queryInterface.addColumn(
      'comments',
      'blogId',
      {
        type:Sequelize.INTEGER,
        references: {
          model: 'blogs',
          key: 'id'
        }
      }),
      queryInterface.addColumn(
        'authors',
        'blogId',
        {
          type:Sequelize.INTEGER,
          references: {
            model: 'blogs',
            key: 'id'
          }
        }),
      queryInterface.addColumn(
        'categories',
        'blogId',
        {
          type:Sequelize.INTEGER,
          references: {
            model: 'blogs',
            key: 'id'
          }
        })
    )
  },

  down: (queryInterface, Sequelize) => {

    return (queryInterface.removeColumn('comments', 'blogId'),
    queryInterface.removeColumn('authors', 'blogId'),
    queryInterface.removeColumn('categories', 'blogId'))

  }
};
