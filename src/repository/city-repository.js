const { where, Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async CreateCity(cityName) {
    try {
      const city = await City.findOne({ where: { name: cityName } });
      if (!city) return await City.create({ name: cityName });
      else throw "Duplicate city entry";
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async CreateAllCity(cityName) {
    try {
      return await City.bulkCreate(cityName, { ignoreDuplicates: true });
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async GetCity(CityId) {
    try {
      return await City.findByPk(CityId);
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async GetAllCities(filter) {
    try {
      let city = null;
      if (filter.name) {
        city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
      } else city = await City.findAll();
      return city;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async DeleteCity(CityId) {
    try {
      const city = await City.destroy({ where: { id: CityId } });
      return true;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }

  async UpdateCity(CityId, newCityName) {
    try {
      const city = await City.update(
        { name: newCityName },
        { where: { id: CityId } }
      );
      return await City.findByPk(CityId);
    } catch (error) {
      console.log("Error in repositry layer ");
      throw error;
    }
  }
}
module.exports = CityRepository;
