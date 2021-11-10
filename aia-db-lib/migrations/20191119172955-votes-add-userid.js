module.exports = {
  up: async (queryInterface, Sequelize) => {
    const addColumn = () =>
      queryInterface.addColumn("votes", "userId", {
        type: Sequelize.UUID,
      });

    const createForeignKey = () =>
      queryInterface.addConstraint("votes", ["userId"], {
        type: "foreign key",
        name: "fk_userid_votes",
        references: {
          table: "users",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });

    return Promise.all([await addColumn(), await createForeignKey()]);
  },

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn("votes", "userId")]),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
