module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("votes", "answerId", {
      type: Sequelize.INTEGER,
    }),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn("votes", "answerId")]),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
