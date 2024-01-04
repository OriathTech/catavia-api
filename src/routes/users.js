import { Router } from "express";
import { getUsers, putUser, deleteUser } from "../controllers/users.controllers.js";
//controllers
//middlewares

export const routerUsers = Router();

//("api/users")
routerUsers.get('/', getUsers);

routerUsers.put('/:uid', putUser);
routerUsers.delete('/:uid', deleteUser);