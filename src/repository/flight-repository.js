const { Op } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {
  #createFilter(data) {
    const filter = {};
    if (data.depatureAirportId) {
      filter.depatureAirportId = data.depatureAirportId;
    }
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        price: { [Op.between]: [data.minPrice, data.maxPrice] },
      });
    } else if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    } else if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    return filter;
  }

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
      console.log("Error in repository layer ");
      throw error;
    }
  }

  async GetFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Error in repository layer");
      throw error;
    }
  }

  async GetAllFlight(data) {
    try {
      const filter = this.#createFilter(data);
      const flight = await Flight.findAll({ where: filter });
      return flight;
    } catch (error) {
      console.log("Error in repository layer");
      throw error;
    }
  }
}

module.exports = FlightRepository;
