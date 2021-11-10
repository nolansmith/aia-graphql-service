
module.exports = (sequelize, DataTypes) => {
  const votes = sequelize.define('vote', {
    action: DataTypes.STRING,
  }, {});
  votes.associate = function (models) {
    // associations can be defined here
    // votes.belongsTo(models.question);
    votes.belongsTo(models.user);
    votes.belongsTo(models.answer);
  };


  return votes;
};
