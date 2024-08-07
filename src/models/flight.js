'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init(
    {
      flightNumber: DataTypes.STRING,
      airplaneId: DataTypes.INTEGER,
      depatureAirportId: DataTypes.INTEGER,
      arrivalAirportId: DataTypes.INTEGER,
      arrivalTime: DataTypes.DATE,
      depatureTime: DataTypes.DATE,
      price: DataTypes.INTEGER,
      NumberOfSeats: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};