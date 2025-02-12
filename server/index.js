import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import routes from './routes/app.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT);

console.log(`Server running on ${PORT}`);
