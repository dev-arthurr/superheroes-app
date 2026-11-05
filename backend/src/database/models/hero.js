'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Movie, {
        through: models.MovieHero,
        foreignKey: 'heroId',
        otherKey: 'movieId',
        as: 'movies'
      })
    }
  }
  Hero.init({
    name: DataTypes.STRING,
    universe: DataTypes.STRING,
    power: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'Heros'
  });
  return Hero;
};