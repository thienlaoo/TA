import express from "express";
import { createNewHero, getSingleHero, getAllHeroes, updateHero, deleteHero } from "../Controllers/hero.controller.js";
import { validateCreateHero} from "../Validation/validate.hero.js";

export const heroRoutes = express.Router();

heroRoutes.post('/heroes', validateCreateHero, createNewHero);
heroRoutes.get('/heroes/:id', getSingleHero);
heroRoutes.get('/heroes', getAllHeroes);
heroRoutes.delete('/heroes/:id', deleteHero);
heroRoutes.patch('/heroes/:id', updateHero);
