const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async CreateCity(cityName) {
    try {
      return await City.create({ name: cityName });
    } catch (error) {
      console.log("Error in repositry layer ");
      throw {error};
    }
  }

  async GetCity(cityId) {
    try {
      return await City.findByPk(cityId);
    } catch (error) {
      console.log("Error in repositry layer ");
      throw {error};
    }
  }

  async DeleteCity(cityId) {
    try {
      const city = await City.destroy({ where: { id: cityId } });
      return true;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw {error};
    }
  }

  async UpdateCity(oldCityId, newCityName) {
    try {
      const city = await City.update(newCityName, { where: { id: oldCityId } });
      return city;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw { error };
    }
  }
}
module.exports = CityRepository;
