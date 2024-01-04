import { Router } from "express";
import { getIngredients, postIngredient, putIngredient, deleteIngredient} from "../controllers/ingredients.controllers.js"
//controllers
//middlewares

export const routerIngredients = Router();

//("api/ingredients")
routerIngredients.get('/', getIngredients);
routerIngredients.post('/', postIngredient);

routerIngredients.put('/:iid', putIngredient);
routerIngredients.delete('/:iid', deleteIngredient);