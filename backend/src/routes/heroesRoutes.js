import { Router } from "express";
import { HeroesController } from "../controllers/heroesController.js";

const heroesController = new HeroesController();
const router = Router();

router.get("/", (req, res) => heroesController.getAll(req, res));
router.get("/:id", (req, res) => heroesController.getById(req, res));
router.post("/", (req, res) => heroesController.create(req, res));
router.put("/:id", (req, res) => heroesController.update(req, res));
router.delete("/:id", (req, res) => heroesController.delete(req, res));

export default router;