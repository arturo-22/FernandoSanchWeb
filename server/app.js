import express from "express";
import routes from "./routes/app.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

export default app;
