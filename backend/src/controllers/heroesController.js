import { Controller } from "./controller.js";
import { HeroesService } from "../services/heroesService.js";

const Service = new HeroesService();

class HeroesController extends Controller {
    constructor() {
        super(Service)
    }
}

export { HeroesController }