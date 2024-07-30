const { where } = require("sequelize");
const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(airplaneId) {
    try {
      const airplane = await Airplane.findOne({ where: { id: airplaneId } });
      return airplane;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
