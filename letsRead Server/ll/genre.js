'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.hasMany(models.Book,{
        foreignKey:'genre_id'
      })
     
    }
  }
  Genre.init({
    name: {type: DataTypes.STRING},
    description: {type:DataTypes.STRING(1234)}
}, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};