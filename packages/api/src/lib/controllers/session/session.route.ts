import * as sessionController from "./session.controller";
import { Router } from "express";
import { auth } from "#lib";

const router = Router();

router.get("/@me", auth, sessionController.getMe);
router.get("/@me/all", auth, sessionController.getMeSessions);

router.delete("/@me/:sessionId", auth, sessionController.deleteMeSession);

export default router;
