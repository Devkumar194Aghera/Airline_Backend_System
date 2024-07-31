const { AirplaneRepository } = require("../repository/index");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const airplane = await this.airplaneRepository.create(data);
      return airplane;
    } catch (error) {
      console.log("Error in the serice layer :" + error);
      throw error;
    }
  }

  async destroyAirplane(airplaneId) {
    try {
      const airplane = await this.airplaneRepository.destory(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Error in the serice layer :" + error);
      throw error;
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await this.airplaneRepository.get(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Error in the serice layer :" + error);
      throw error;
    }
  }

  async getAllAirplane(data) {
    try {
      const airplane = await this.airplaneRepository.getAll(data);
      return airplane;
    } catch (error) {
      console.log("Error in the serice layer :" + error);
      throw error;
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await this.airplaneRepository.update(airplaneId, data);
      return airplane;
    } catch (error) {
      console.log("Error in the serice layer :" + error);
      throw error;
    }
  }
}

module.exports = AirplaneService;
