import { Router } from "express";

import { AuthController, SessionController, UserController, FlagController } from "#lib";

const router = Router();

router.use("/auth", AuthController);
router.use("/sessions", SessionController);
router.use("/users", UserController);
router.use("/flags", FlagController);

export default router;
