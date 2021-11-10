module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addConstraint("votes", ["answerId"], {
      type: "foreign key",
      name: "fk_answerid_Votes",
      references: {
        table: "answers",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    }),

  down: (queryInterface, Sequelize) => Promise.resolve(null),

  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
