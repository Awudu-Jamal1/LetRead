'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      notifications.belongsTo(models.User,{
        foreignKey:'user_id'
      })
    }
  }
  notifications.init({
    Message: DataTypes.STRING,
    status: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'notifications',
  });
  return notifications;
};