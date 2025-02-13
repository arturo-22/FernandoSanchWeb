import express from "express";
import app from "./app.js";
import cors from "cors";
import { PORT } from "./config.js";
import routes from "./routes/app.routes.js";
import {connectDB} from "./db.js";

app.use(cors());
app.use(express.json());
app.use(routes);

connectDB();
app.listen(PORT);

console.log(`Server running on ${PORT}`);
