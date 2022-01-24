import { auth, permissions, SitePermissionFlags, validate } from "#lib";
import { createFlagSchema, updateFlagSchema } from "./validations";
import * as flagController from "./flag.controller";
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

router.patch(
  "/:flagId",
  auth,
  permissions(SitePermissionFlags.Administrator),
  validate(updateFlagSchema),
  flagController.updateFlag
);

export default router;
