import { auth, permissions, SitePermissionFlags, validate } from "#lib";
import * as flagController from "./flag.controller";
import { createFlagSchema } from "./validations";
import { Router } from "express";

const router = Router();

router.get("/", auth, flagController.getFlags);
router.get("/:flagId", auth, flagController.getFlag);

router.post(
  "/",
  auth,
  permissions(SitePermissionFlags.Administrator),
  validate(createFlagSchema),
  flagController.createFlag
);

export default router;
