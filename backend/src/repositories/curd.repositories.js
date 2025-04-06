const logger = require("../config/logger.config");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try{
            const created = await this.model.create(data);
            return created;
        
        } catch (error) {  
            logger.error(`Error creating ${this.model.name}:`, error);
            throw error;
        }
    }
}