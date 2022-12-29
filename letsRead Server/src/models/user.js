'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here l
      User.hasMany(models.review,{
        foreignKey:'user_id'
      })
      User.hasMany(models.Rating,{
        foreignKey:'user_id'
      })
      User.hasMany(models.notifications,{
        foreignKey:'user_id'
      })
      User.hasMany(models.post,{
        foreignKey:'user_id'
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: {type:DataTypes.STRING,
    Unique: true},
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};