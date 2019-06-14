'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return (
      queryInterface.addColumn(
      'blogs',
      'authorsId',
      {
        type:Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id'
        }
      }),
      queryInterface.addColumn(
        'blogs',
        'commentsId',
        {
          type:Sequelize.INTEGER,
          references: {
            model: 'comments',
            key: 'id'
          }
        })
    )
  },

  down: (queryInterface, Sequelize) => {

    return (queryInterface.removeColumn('blogs', 'authorId'),
    queryInterface.removeColumn('blogs', 'commentsId'));

  }
};
