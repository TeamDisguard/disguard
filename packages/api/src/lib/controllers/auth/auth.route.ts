import { Router } from "express";
import * as authController from "./auth.controller";

const router = Router();

router.get("/login", authController.login);
router.get("/callback", authController.callback);

export default router;
