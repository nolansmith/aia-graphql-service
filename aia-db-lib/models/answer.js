
module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    text: DataTypes.STRING,
  }, {});
  answer.associate = function (models) {
    // associations can be defined here
    answer.belongsTo(models.question);
    answer.belongsTo(models.user);
    answer.hasMany(models.vote);
  };
  return answer;
};
