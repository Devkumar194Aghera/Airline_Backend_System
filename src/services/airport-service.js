const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(airportDetails) {
    try {
      const airport = await this.airportRepository.createAirport(
        airportDetails
      );
      return airport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }
}

module.exports = AirportService;
