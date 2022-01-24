import { Router } from "express";
import { auth, permissions, SitePermissionFlags, validate } from "#lib";
import * as flagController from "./flag.controller";
import { createFlagSchema } from "./validations";

const router = Router();

router.post(
  "/",
  auth,
  permissions(SitePermissionFlags.Administrator),
  validate(createFlagSchema),
  flagController.createFlag
);

export default router;
