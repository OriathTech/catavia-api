import { Router } from "express";
import { getExtras, postExtra, putExtra, deleteExtra} from "../controllers/extras.controllers.js"
import { auth, roleValidation } from "../middlewares/auth.js";

export const routerExtras = Router();

//("api/extras")
routerExtras.get('/', auth('jwt'), roleValidation(["admin"]), getExtras);
routerExtras.post('/', auth('jwt'), roleValidation(["admin"]), postExtra);

routerExtras.put('/:eid', auth('jwt'), roleValidation(["admin"]), putExtra);
routerExtras.delete('/:eid', auth('jwt'), roleValidation(["admin"]), deleteExtra);