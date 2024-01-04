import { Router } from "express";
import { __dirname } from "../path.js";

import { routerProducts } from "./products.js";
import { routerCarts } from "./carts.js";
import { routerUsers } from "./users.js";
import { routerIngredients } from "./ingredients.js";
import { routerServices } from "./services.js";
import { routerSessions } from "./sessions.js";
import { routerExtras } from "./extras.js";
import { routerThumbnails } from "./thumbnails.js";


const router = Router();

//Routes
router.use('/api/products', routerProducts);
router.use('/api/carts', routerCarts);
router.use('/api/users', routerUsers);
router.use('/api/session', routerSessions);
router.use('/api/ingredients', routerIngredients);
router.use('/api/services', routerServices);
router.use('/api/extras', routerExtras);
router.use('/api/thumbnails', routerThumbnails);

export default router;