import * as userController from "./user.controller";
import { userSearchSchema } from "./validations";
import { Router } from "express";
import { auth, validate } from "#lib";

const router = Router();

router.get("/@me", auth, userController.getMe);
router.get("/search", auth, validate(userSearchSchema), userController.searchUser);
router.get("/:userId", auth, userController.getUser);

export default router;
