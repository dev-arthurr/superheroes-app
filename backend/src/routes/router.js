import heroesRouter from "./heroesRoutes.js";

export default function registerRoutes(app) {
  app.use("/heroes", heroesRouter);
}