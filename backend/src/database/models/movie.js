'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Hero, {
        through: models.MovieHero,
        foreignKey: 'movieId',
        otherKey: 'heroId',
        as: 'heroes',
      })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'Movies'
  });
  return Movie;
};