import dataSource from "../database/models/index.js";

class Service {
  constructor(modelName) {
    this.model = modelName;
  }

  async listAll() {
    return dataSource[this.model].findAll();
  }

  async listId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRecord(data) {
    return dataSource[this.model].create(data);
  }

  async updateRecord(id, data) {
    const isUpdated = await dataSource[this.model].update(data, {
      where: { id: id },
    });

    if (isUpdated) {
      return true;
    } else {
      return false;
    }
  }

  async deleteRecord(id) { 
    return dataSource[this.model].destroy({
        where: {
            id: id
        }})
  }
}

export { Service };
