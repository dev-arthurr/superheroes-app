'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieHero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieHero.init({
    movieId: DataTypes.INTEGER,
    heroId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieHero',
    tableName: 'MovieHeros'
  });
  return MovieHero;
};