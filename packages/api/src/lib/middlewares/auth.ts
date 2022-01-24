import {
  ApiError,
  SitePermissionFlagsResolvable,
  userService,
  sessionService,
  SitePermissions
} from "#lib";

import type { Request, Response, NextFunction } from "express";
import { bcryptCompare, decrypt } from "@disguard/crypto";
import { encryptionKey } from "#config";
import { HttpCodes } from "#consts";

const isExpiredSession = async (
  userId: string,
  id: string,
  expiresAt: Date
): Promise<boolean> => {
  if (expiresAt.getTime() > Date.now()) return false;
  await sessionService.deleteSession(userId, id);
  return true;
};

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const sessionToken: string = req.cookies.session ?? "";
  const [encodedUserId, version, hash] = sessionToken.split(".");
  const userId = Buffer.from(encodedUserId, "base64url").toString("utf-8");

  const session = await sessionService.getSession(userId, version);

  // Check invalid session
  if (!session || session.invalid) {
    return next(new ApiError(HttpCodes.Unauthorized));
  }

  /**
   * Check expired session
   */
  if (await isExpiredSession(userId, session.id, session.expiresAt)) {
    return next(new ApiError(HttpCodes.Unauthorized));
  }

  const isMatchedHash = await bcryptCompare(hash, session.token);
  if (!isMatchedHash) return next(new ApiError(HttpCodes.Unauthorized));

  res.locals = {
    userId: session.userId,
    accessToken: decrypt(encryptionKey, session.accessToken),
    refreshToken: decrypt(encryptionKey, session.refreshToken),
    session: {
      id: session.id,
      device: session.device,
      expiresAt: session.expiresAt,
      createdAt: session.createdAt
    }
  };

  return next();
};

export const permissions = (permissions: SitePermissionFlagsResolvable) => {
  return async (_req: Request, res: Response, next: NextFunction) => {
    const user = await userService.getUser(res.locals.userId);
    if (!user) return next(new ApiError(HttpCodes.Unauthorized));

    const userPermissions = new SitePermissions(user.sitePermissions);
    if (!userPermissions.has(permissions))
      return next(new ApiError(HttpCodes.Unauthorized));

    return next();
  };
};
