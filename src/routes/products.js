import { Router } from "express";
//controllers
//middlewares

export const routerProducts = Router();

//('api/products')
routerProducts.get('/', getProducts);
routerProducts.post('/',  postProduct);

routerProducts.get('/:pid', getProduct);
routerProducts.put('/:pid', putProduct);
routerProducts.delete('/:pid', deleteProduct);


routerProducts.post('/thumbnails', postThumbnailProduct);
routerProducts.delete('/thumbnails/tid', deleteThumbnailProduct);