import { Router } from "express";
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

routerCarts.post('/purchase',  postTicket);







