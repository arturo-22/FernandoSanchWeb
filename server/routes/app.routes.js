import { Router } from "express";
import { getUser, createUsers } from "../controllers/users.controllers.js";

const router = Router();

router.get("/user/:id", getUser);
router.post("/users", createUsers);

export default router;
