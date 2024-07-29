const { where, Op } = require("sequelize");
const { Airport, City } = require("../models/index");

class AirportRepository {
  async CreateAirport(airportDetails) {
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

  async GetAirport(airportId) {
    try {
      return await Airport.findOne({ where: { id: airportDetails } });
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async GetAllAirport(filter) {
    try {
      let airport = null;
      if (filter.name) {
        airport = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
      } else airport = await Airport.findAll();
      return airport;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async DeleteAirport(airportId) {
    try {
      const airport = await Airport.destroy({ where: { id: airportId } });
      return true;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async UpdateAirport(AirportId, airportDetails) {
    try {
      const airport = await Airport.update(
        { name: airportDetails.name },
        { where: { id: AirportId } }
      );
      return await Airport.findByPk(AirportId);
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }
}
module.exports = AirportRepository;
