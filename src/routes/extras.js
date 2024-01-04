import { Router } from "express";
import { getExtras, postExtra, putExtra, deleteExtra} from "../controllers/extras.controllers.js"
//controllers
//middlewares

export const routerExtras = Router();

//("api/extras")
routerExtras.get('/', getExtras);
routerExtras.post('/', postExtra);

routerExtras.put('/:eid', putExtra);
routerExtras.delete('/:eid', deleteExtra);