const { Airport, City } = require("../models/index");

class AirportRepository {
  async createAirport(airportDetails) {
    try {
      const ifcity = await City.findByPk(airportDetails.cityId);
      if (!ifcity) {
        throw "Unkown city entry";
      }
      const airport = await Airport.create({
        name: airportDetails.name,
        cityId: airportDetails.cityId,
      });
      return await ifcity.addAirport(airport, {
        through: {
          cityId: ifcity.id,
        },
      });
    } catch (error) {
      console.log("Error in the repository layer");
      throw error;
    }
  }
}

module.exports = AirportRepository;
