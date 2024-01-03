import { Router } from "express";
//controllers
//middlewares

export const routerUsers = Router();

//("api/users")
routerUsers.get('/', getUsers);

routerUsers.put('/:uid', putUser);
routerUsers.delete('/:uid', deleteUser);