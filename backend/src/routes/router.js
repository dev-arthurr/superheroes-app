import heroesRouter from "./heroesRoutes.js";
import moviesRouter from "./moviesRoutes.js";

export default function registerRoutes(app) {
  app.use("/heroes", heroesRouter);
  app.use("/movies", moviesRouter);
}