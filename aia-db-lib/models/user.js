
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {},
  );
  user.associate = function (models) {
    // associations can be defined here
    // console.log('Performing association ', models)
    user.hasMany(models.question);
    user.hasMany(models.answer);
    user.hasMany(models.vote);
  };

  return user;
};
