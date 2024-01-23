import { Router } from "express";
import { getIngredients, postIngredient, putIngredient, deleteIngredient} from "../controllers/ingredients.controllers.js"
import { auth, roleValidation } from "../middlewares/auth.js";

export const routerIngredients = Router();

//("api/ingredients")
routerIngredients.get('/', auth('jwt'), roleValidation(["admin"]), getIngredients);
routerIngredients.post('/', auth('jwt'), roleValidation(["admin"]), postIngredient);

routerIngredients.put('/:iid', auth('jwt'), roleValidation(["admin"]), putIngredient);
routerIngredients.delete('/:iid', auth('jwt'), roleValidation(["admin"]), deleteIngredient);