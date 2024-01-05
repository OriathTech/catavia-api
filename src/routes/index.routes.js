import { Router } from "express";
import { __dirname } from "../path.js";

import { routerProducts } from "./products.js";
import { routerUsers } from "./users.js";
import { routerIngredients } from "./ingredients.js";
import { routerServices } from "./services.js";
import { routerSessions } from "./sessions.js";
import { routerExtras } from "./extras.js";


const router = Router();

//Routes
router.use('/api/products', routerProducts);
router.use('/api/users', routerUsers);
router.use('/api/session', routerSessions);
router.use('/api/ingredients', routerIngredients);
router.use('/api/services', routerServices);
router.use('/api/extras', routerExtras);

export default router;