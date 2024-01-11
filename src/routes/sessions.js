import { Router } from "express";
import { loginUser, registerUser } from "../controllers/sessions.controllers.js";
//controllers
//middlewares

export const routerSessions = Router();

//("api/sessions")
routerSessions.post("/register", registerUser);
routerSessions.get("/login/jwt", loginUser );

routerSessions.get("/logout");
routerSessions.get("/current");