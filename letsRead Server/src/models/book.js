'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author,{
        foreignKey:'author_id'
      })
      Book.belongsTo(models.Genre,{
        foreignKey:'genre_id'
      })
      Book.hasMany(models.review,{
        foreignKey:'book_id'
      })
      Book.hasMany(models.Rating,{
        foreignKey:'book_id'
      })
    }
  }
  Book.init({
    title: {type: DataTypes.STRING},
    description: {type:DataTypes.STRING(5000)},
    contribution: {type:DataTypes.STRING},
    author: {type:DataTypes.STRING},
    publisher: {type:DataTypes.STRING},
    isbns: {type:DataTypes.STRING},
    review: {type:DataTypes.STRING},
    img_Url: {type:DataTypes.STRING},
    genre: {type:DataTypes.STRING},
    page:{type:DataTypes.INTEGER}
}, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};