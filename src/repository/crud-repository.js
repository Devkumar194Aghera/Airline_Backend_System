class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Error in the crud repository");
      throw error;
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("Error in the crud repository");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const result = await this.model.findAll({ where: data });
      return result;
    } catch (error) {
      console.log("Error in the crud repository");
      throw error;
    }
  }

  async destory(modelId) {
    try {
      const result = await this.model.destroy({ where: { id: modelId.id } });
      return true;
    } catch (error) {
      console.log("Error in the crud repository");
      throw error;
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: { id: modelId.id },
      });
      return true;
    } catch (error) {
      console.log("Error in the crud repository");
      throw error;
    }
  }
}

module.exports = CrudRepository;
