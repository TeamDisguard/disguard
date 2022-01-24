import { Router } from "express";

import { AuthController, FlagController } from "#lib";

const router = Router();

router.use("/auth", AuthController);
router.use("/flags", FlagController);

export default router;
