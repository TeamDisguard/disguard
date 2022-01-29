import {
  getFlagSchema,
  createFlagSchema,
  updateFlagSchema,
  deleteFlagSchema
} from "./validations";

import { auth, permissions, SitePermissionFlags, validate } from "#lib";
import * as flagController from "./flag.controller";
import { Router } from "express";

const router = Router();

router.get("/", auth, flagController.getFlags);
router.get("/:flagId", auth, validate(getFlagSchema), flagController.getFlag);

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

router.delete(
  "/:flagId",
  auth,
  permissions(SitePermissionFlags.Administrator),
  validate(deleteFlagSchema),
  flagController.deleteFlag
);

export default router;
