import { Router } from "express";
//controllers
//middlewares

export const routerExtras = Router();

//("api/extras")
routerExtras.get('/', getExtras);
routerExtras.post('/', postExtra);

routerExtras.put('/:eid', putExtra);
routerExtras.delete('/:eid', deleteExtras);