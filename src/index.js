import dotenv from 'dotenv'
import express from "express";
import connectionMongoose from "./config/mongoDB.js";
import cors from 'cors';
import corsOptions from "./config/cors.js";
import router from './routes/index.routes.js'

dotenv.config()
const PORT = process.env.PORT || 8080;
const app = express();


app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectionMongoose();

app.use('/', router)

const server = app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})