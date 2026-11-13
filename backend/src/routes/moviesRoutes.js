import { Router } from "express";
import { MoviesController } from "../controllers/moviesController.js"

const moviesController = new MoviesController();
const router = Router();

router.get("/", (req, res) => moviesController.getAll(req, res));
router.get("/:id", (req, res) => moviesController.getById(req, res));
router.post("/", (req, res) => moviesController.create(req, res));
router.put("/:id", (req, res) => moviesController.update(req, res));
router.delete("/:id", (req, res) => moviesController.delete(req, res));

export default router;