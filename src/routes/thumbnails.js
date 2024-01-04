import { Router } from "express";
import { postThumbnail, deleteThumbnail } from "../controllers/thumbnails.controllers.js";
//controllers
//middlewares

export const routerThumbnails = Router();

//('api/thumbnails')
routerThumbnails.post('/thumbnails', postThumbnail);
routerThumbnails.delete('/thumbnails/tid', deleteThumbnail);