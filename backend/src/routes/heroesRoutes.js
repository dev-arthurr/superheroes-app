import { Router } from "express";
import { HeroesController } from "../controllers/heroesController.js";

const heroesController = new HeroesController();
const router = Router();

router.get("/", (req, res) => heroesController.getAll(req, res));
router.get("/:id", (req, res) => heroesController.getById(req, res));

export default router;