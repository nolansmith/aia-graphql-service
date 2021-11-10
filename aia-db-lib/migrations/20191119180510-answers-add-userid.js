module.exports = {
  up: async (queryInterface, Sequelize) => {
    const addColumn = () =>
      queryInterface.addColumn("answers", "userId", {
        type: Sequelize.UUID,
      });

    const createForeignKey = () =>
      queryInterface.addConstraint("answers", ["userId"], {
        type: "foreign key",
        name: "fk_userid_answers",
        references: {
          table: "users",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });

    return Promise.all([await addColumn(), await createForeignKey()])
  },

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn("answers", "userId")]),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
