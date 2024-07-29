const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async CreateAirport(airportDetails) {
    try {
      const airport = await this.airportRepository.CreateAirport(
        airportDetails
      );
      return airport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  async DeleteAirport(AirportId) {
    try {
      const airport = await this.airportRepository.DeleteAirport(AirportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async UpdateAirport(AirportId, AirportDetails) {
    try {
      const airport = await this.airportRepository.UpdateAirport(
        AirportId,
        AirportDetails
      );
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async SearchAirport(AirportId) {
    try {
      const airport = await this.airportRepository.GetAirport(AirportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async SearchAllAirports(filter) {
    try {
      const airport = await this.airportRepository.GetAllAirport(filter);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
