const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(name) {
    try {
      const city = await this.cityRepository.CreateCity(name);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.DeleteCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
  async updateCity(cityId, newCityName) {
    try {
      const city = await this.cityRepository.UpdateCity(cityId, newCityName);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
  async searchCity(cityId) {
    try {
      const city = await this.cityRepository.GetCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async searchAllCities(filter) {
    try {
      const city = await this.cityRepository.GetAllCities(filter);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
