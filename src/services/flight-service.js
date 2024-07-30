const { FlightRepository, AirplaneRepository } = require("../repository/index");
const compareDate = require("../utils/helper");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareDate(data.arrivalTime, data.departureTime)) {
        throw { error: "Departure time cannot be greater than Arrival time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      data = { ...data, totalSeats: airplane.capacity };
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
