import * as authController from "./auth.controller";
import { Router } from "express";
import { auth } from "#lib";

const router = Router();

router.get("/login", authController.login);
router.get("/callback", authController.callback);

router.post("/logout", auth, authController.logout);

export default router;
