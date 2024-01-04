import { Router } from "express";
import { postSession, loginUser, logoutUser, getSession } from "../controllers/sessions.controllers.js";
//controllers
//middlewares

export const routerSessions = Router();

//("api/sessions")
routerSessions.post("/register", postSession);
routerSessions.post("/login", loginUser);

routerSessions.get("/logout", logoutUser);
routerSessions.get("/current", getSession);