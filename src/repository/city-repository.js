const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async CreateCity(cityName) {
    try {
      return await City.create({ name: cityName });
    } catch (error) {
      console.log("Error in repositry layer ");
      throw { error };
    }
  }

  async GetCity(CityId) {
    try {
      return await City.findByPk(CityId);
    } catch (error) {
      console.log("Error in repositry layer ");
      throw { error };
    }
  }

  async DeleteCity(CityId) {
    try {
      const city = await City.destroy({ where: { id: CityId } });
      return true;
    } catch (error) {
      console.log("Error in repositry layer ");
      throw { error };
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
      throw { error };
    }
  }
}
module.exports = CityRepository;
