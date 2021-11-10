module.exports = {
  up: async (queryInterface, Sequelize) => {
    const addColumn = () =>
      queryInterface.addColumn("questions", "userId", {
        type: Sequelize.UUID,
      });

    const createForeignKey = () =>
      queryInterface.addConstraint("questions", ["userId"], {
        type: "foreign key",
        name: "fk_userid_questions",
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
    Promise.all([queryInterface.removeColumn("questions", "userId")]),
};
