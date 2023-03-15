import { Router } from 'express';
import { getLanguagesList, translateText } from '../controllers/translate_controller.js';

export const router = Router();

router.get("/", getLanguagesList);
router.post("/translate", translateText);
