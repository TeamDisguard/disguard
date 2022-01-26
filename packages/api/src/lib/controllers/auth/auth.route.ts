import { login, callback, logout } from "./auth.controller";
import { callbackSchema } from "./validations";
import { Router } from "express";
import { auth, validate } from "#lib";

const router = Router();

router.get("/login", login);
router.get("/callback", validate(callbackSchema), callback);

router.post("/@me/logout", auth, logout);

export default router;
