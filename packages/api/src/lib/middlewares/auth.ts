import type { Request, Response, NextFunction } from "express";
import { bcryptCompare } from "@disguard/crypto";
import { ApiError, sessionService } from "#lib";
import { HttpCodes } from "#consts";

export const auth = async (req: Request, _res: Response, next: NextFunction) => {
  const sessionToken: string = req.cookies.session ?? "";
  const [encodedUserId, version, hash] = sessionToken.split(".");
  const userId = Buffer.from(encodedUserId, "base64url").toString("utf-8");

  const session = await sessionService.getSession(userId, version);
  if (!session) return next(new ApiError(HttpCodes.Unauthorized));

  const isMatchedHash = await bcryptCompare(hash, session.token);
  if (!isMatchedHash) return next(new ApiError(HttpCodes.Unauthorized));

  return next();
};
