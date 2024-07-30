const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      data = { ...data, totalSeats: airplane.capacity };
      console.log(data);
      const flight = await this.flightRepository.CreateFlight(data);
      return flight;

      //   const flight = await this.flightRepository.CreateFlight(data);
    } catch (error) {
      console.log("Something went wrong in service layer:" + error);
      throw { error };
    }
  }
}

module.exports = FlightService;
