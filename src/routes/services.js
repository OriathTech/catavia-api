import { Router } from "express";
import { getServices, postService, putService, deleteService} from "../controllers/services.controllers.js"
//controllers
//middlewares

export const routerServices = Router();

//("api/services")
routerServices.get('/', getServices);
routerServices.post('/', postService);

routerServices.put('/:eid', putService);
routerServices.delete('/:eid', deleteService);