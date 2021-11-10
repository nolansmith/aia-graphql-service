const Sequelize = require('sequelize');
const config = require('./config/index.js')[process.env.NODE_ENV];

const sequelize = new Sequelize(config);
const models = require('./models/index.js');


module.exports = {
  models,
  sequelize,
};
