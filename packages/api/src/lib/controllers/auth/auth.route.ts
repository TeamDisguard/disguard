import * as authController from "./auth.controller";
import { Router } from "express";
import { auth } from "#lib";

const router = Router();

router.get("/login", authController.login);
router.get("/callback", authController.callback);

router.get("/@me", auth, authController.getMe);

export default router;
