import * as userController from "./user.controller";
import { getUserSchema, userSearchSchema } from "./validations";
import { Router } from "express";
import { auth, validate } from "#lib";

const router = Router();

router.get("/@me", auth, userController.getMe);
router.get("/search", auth, validate(userSearchSchema), userController.searchUser);
router.get("/:userId", auth, validate(getUserSchema), userController.getUser);

export default router;
