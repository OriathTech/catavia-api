import { Router } from "express";
import { getProducts, postProduct, getProduct, putProduct, deleteProduct, checkout, postThumbnail, deleteThumbnail } from "../controllers/products.controllers.js";
//controllers
//middlewares

export const routerProducts = Router();

//('api/products')
routerProducts.get('/', getProducts);
routerProducts.post('/',  postProduct);

routerProducts.get('/:pid', getProduct);
routerProducts.put('/:pid', putProduct);
routerProducts.delete('/:pid', deleteProduct);

routerProducts.post('/:pid/thumbnail/:position', postThumbnail);
routerProducts.delete('/:pid/thumbnail/:position', deleteThumbnail);

routerProducts.post('/chekout', checkout);