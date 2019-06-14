'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return (
      queryInterface.addColumn(
      '',
      '',
      {
        type:Sequelize.INTEGER,
        references: {
          model: 'blog',
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
