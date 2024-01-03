import { Router } from "express";
import { __dirname } from "../path";

const router = Router();

//Routes
router.use('/api/products', routerProducts);
router.use('/api/carts', routerCarts);
router.use('/api/users', routerUsers);
router.use('/api/session', routerSessions);
router.use('/api/ingredients', routerIngredients);
router.use('/api/services', routerServices);
router.use('/api/extras', routerExtras);

export default router;