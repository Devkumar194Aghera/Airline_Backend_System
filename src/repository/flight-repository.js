const { Flight } = require("../models/index");

class FlightRepository {
  async CreateFlight(data) {
    try {
      const flight = await Flight.create({
        flightNumber: data.flightNumber,
        airplaneId: data.airplaneId,
        depatureAirportId: data.depatureAirportId,
        arrivalAirportId: data.arrivalAirportId,
        arrivalTime: data.arrivalTime,
        depatureTime: data.departureTime,
        price: data.price,
        NumberOfSeats: data.totalSeats,
      });
      return flight;
    } catch (error) {
      console.log("Error in repository layer :" + error);
      throw error;
    }
  }
}

module.exports = FlightRepository;

