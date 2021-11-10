
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {

    text: DataTypes.STRING,
  }, {});
  question.associate = function (models) {
    // associations can be defined here
    question.belongsTo(models.user);
    question.hasMany(models.answer);
  };

  return question;
};
