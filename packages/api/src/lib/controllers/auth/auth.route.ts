import * as authController from "./auth.controller";
import { Router } from "express";
import { auth } from "#lib";

const router = Router();

router.get("/login", authController.login);
router.get("/callback", authController.callback);

router.get("/@me", auth, authController.getMe);
router.get("/@me/sessions", auth, authController.getMeSessions);

router.delete("/@me/sessions/:sessionId", auth, authController.deleteMeSession);

export default router;
