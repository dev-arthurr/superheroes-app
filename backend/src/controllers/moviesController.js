import { Controller } from "./controller.js";
import { MoviesService } from "../services/moviesService.js";

const Service = new MoviesService();

class MoviesController extends Controller {
    constructor () {
        super(Service)
    }
}

export { MoviesController }