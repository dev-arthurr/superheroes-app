import { Service } from "./service.js";
import dataSource from "../database/models/index.js";

class MoviesService extends Service {
    constructor() {
        super("Movie");
    }

    async listAll() {
        return dataSource.Movie.findAll({
            include: [{ association: dataSource.Movie.associations.heroes }],
        });
    }

    async listId(id) {
        return dataSource.Movie.findByPk(id, {
            include: [{ association: dataSource.Movie.associations.heroes }],
        });
    }

    async createRecord({ heroIDs = [], ...movieData}) {
        return dataSource.sequelize.transaction(async (transaction) => {
            const movie = await dataSource.Movie.create(movieData, { transaction})

            await movie.setHeroes(heroIDs, { transaction });
            
            return dataSource.Movie.findByPk(movie.id, {
                include: [{ association: dataSource.Movie.associations.heroes }],
                transaction,
            })
        })
    }
}

export { MoviesService };