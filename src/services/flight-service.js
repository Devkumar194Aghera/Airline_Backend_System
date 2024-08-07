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
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      data = { ...data, totalSeats: airplane.capacity };
      const flight = await this.flightRepository.CreateFlight(data);
      return flight;

      //   const flight = await this.flightRepository.CreateFlight(data);
    } catch (error) {
      console.log("Something went wrong in service layer:" + error);
      throw error;
    }
  }

  async getFlight(flightId) {
    try {
      const flight = this.flightRepository.GetFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer:" + error);
      throw error;
    }
  }

  async getAllFlight(data) {
    try {
      const flight = this.flightRepository.GetAllFlight(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer:" + error);
      throw error;
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await this.flightRepository.UpdateFlight(flightId, data);
      return flight;
    } catch (error) {
      console.log("Error in flight service layer");
      throw error;
    }
  }
}

module.exports = FlightService;  
