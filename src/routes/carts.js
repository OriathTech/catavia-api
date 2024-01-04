import { Router } from "express";
import { getCart, deleteProductsCart, putCart, postProductCart, putProductQuantity, deleteProductCart, postTicket } from "../controllers/carts.controllers.js";
//controllers
//middlewares

export const routerCarts = Router();

//("api/carts")
routerCarts.get('/', getCart);
routerCarts.delete('/', deleteProductsCart);
routerCarts.put('/', putCart);

routerCarts.post('/product/:pid', postProductCart);
routerCarts.put('/product/:pid', putProductQuantity);
routerCarts.delete('/product/:pid', deleteProductCart);

routerCarts.post('/ticket', postTicket)







