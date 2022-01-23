import { Router } from "express";

import { AuthController } from "#lib";

const router = Router();

router.use("/auth", AuthController);

export default router;
