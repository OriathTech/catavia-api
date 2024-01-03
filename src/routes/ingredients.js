import { Router } from "express";
//controllers
//middlewares

export const routerIngredients = Router();

//("api/ingredients")
routerIngredients.get('/', getIngredients);
routerIngredients.post('/', postIngredient);

routerIngredients.put('/:iid', putIngredient);
routerIngredients.delete('/:iid', deleteIngredient);