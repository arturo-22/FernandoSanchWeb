import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js";

const router = Router();

router.get("/user/:id", login);
router.post("/users", register);

export default router;
