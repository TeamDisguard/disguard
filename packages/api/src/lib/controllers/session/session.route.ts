import { getMe, getMeSessions, deleteMeSession } from "./session.controller";
import { deleteSessionSchema } from "./validations";
import { auth, validate } from "#lib";
import { Router } from "express";

const router = Router();

router.get("/@me", auth, getMe);
router.get("/@me/all", auth, getMeSessions);

router.delete("/@me/:sessionId", auth, validate(deleteSessionSchema), deleteMeSession);

export default router;
