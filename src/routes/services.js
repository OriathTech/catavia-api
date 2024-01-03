import { Router } from "express";
//controllers
//middlewares

export const routerServices = Router();

//("api/services")
routerServices.get('/', getServices);
routerServices.post('/', postService);

routerServices.put('/:eid', putService);
routerServices.delete('/:eid', deleteService);