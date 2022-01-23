import type { Request, Response, NextFunction } from "express";
import { bcryptCompare, decrypt } from "@disguard/crypto";
import { ApiError, sessionService } from "#lib";
import { encryptionKey } from "#config";
import { HttpCodes } from "#consts";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const sessionToken: string = req.cookies.session ?? "";
  const [encodedUserId, version, hash] = sessionToken.split(".");
  const userId = Buffer.from(encodedUserId, "base64url").toString("utf-8");

  const session = await sessionService.getSession(userId, version);
  if (!session) return next(new ApiError(HttpCodes.Unauthorized));

  const isMatchedHash = await bcryptCompare(hash, session.token);
  if (!isMatchedHash) return next(new ApiError(HttpCodes.Unauthorized));

  res.locals = {
    sessionId: session.id,
    userId: session.userId,
    accessToken: decrypt(encryptionKey, session.accessToken),
    refreshToken: decrypt(encryptionKey, session.refreshToken)
  };

  return next();
};
