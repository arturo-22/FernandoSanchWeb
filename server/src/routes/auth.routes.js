import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
  sendResetPassword,
  updatePassword,
} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.js";
import { registerSchema, loginSchema } from "../schemas/auth.shema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);

router.post("/sendResetPassword", sendResetPassword);
router.put("/updatePassword", updatePassword);

export default router;
