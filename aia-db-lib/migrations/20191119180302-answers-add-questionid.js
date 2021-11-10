module.exports = {
  up: async (queryInterface, Sequelize) => {
    const addColumn = () =>
      queryInterface.addColumn("answers", "questionId", {
        type: Sequelize.INTEGER,
      });

    const createForeignKey = () =>
      queryInterface.addConstraint("answers", ["questionId"], {
        type: "foreign key",
        name: "fk_questionid_answers",
        references: {
          table: "questions",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });

    return Promise.all([await addColumn(), await createForeignKey()]);
  },

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn("answers", "questionId")]),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
