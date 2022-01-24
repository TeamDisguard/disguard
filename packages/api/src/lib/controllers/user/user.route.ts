import * as userController from "./user.controller";
import { Router } from "express";
import { auth } from "#lib";

const router = Router();

router.get("/@me", auth, userController.getMe);
router.get("/:userId", auth, userController.getUser);

export default router;
