import dataSource from "../database/models/index.js";

class Service {
    constructor(modelName){
        this.model = modelName;
    }

    async listAll() {
        return dataSource[this.model].findAll();
    }
}

export { Service }