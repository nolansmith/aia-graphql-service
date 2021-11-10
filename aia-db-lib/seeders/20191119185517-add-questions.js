
const questions = require('../util/questions.js');

module.exports = {
  up: (queryInterface, Sequelize) =>
  // console.log('Random ID: ', userId);

    queryInterface.bulkInsert('questions',
      questions), /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('questions', null, {}),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

};
