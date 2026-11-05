import dataSource from "../database/models/index.js";

class Service {
    constructor(modelName){
        this.model = modelName;
    }

    async listAll() {
        return dataSource[this.model].findAll();
    }

    async listId(id) {
        return dataSource[this.model].findByPk(id);
    }
}

export { Service }