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

/**
 * Checks if a session has expired
 * @param userId The id of the session user
 * @param sessionId The id of the session
 * @param expiresAt The date the session expires
 */
export const isExpiredSession = async (
  userId: string,
  sessionId: string,
  expiresAt: Date
): Promise<boolean> => {
  if (expiresAt.getTime() > Date.now()) return false;
  await sessionService.deleteSession(userId, sessionId);
  return true;
};

/**
 * Middleware for authorizing users
 * @param req The request
 * @param res The response
 * @param next The next function
 */
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const sessionToken: string = req.cookies.session ?? "";
  const [encodedUserId, version, hash] = sessionToken.split(".");
  const userId = Buffer.from(encodedUserId, "base64url").toString("utf-8");

  const session = await sessionService.getSessionByUserIdAndVersion(userId, version);

  // Check invalid session
  if (!session || session.invalid) return next(new ApiError(HttpCodes.Unauthorized));

  // Check expired session
  if (await isExpiredSession(userId, session.id, session.expiresAt)) {
    return next(new ApiError(HttpCodes.Unauthorized));
  }

  // Compare session tokens
  const isMatchedHash = await bcryptCompare(hash, session.token);
  if (!isMatchedHash) return next(new ApiError(HttpCodes.Unauthorized));

  res.locals = {
    auth: {
      userId: session.userId,
      accessToken: decrypt(encryptionKey, session.accessToken),
      refreshToken: decrypt(encryptionKey, session.refreshToken),
      session: {
        id: session.id,
        device: session.device,
        expiresAt: session.expiresAt,
        createdAt: session.createdAt
      }
    }
  };

  return next();
};

/**
 * Middleware for for checking permissions of an authorized user
 * @param permissions The permissions
 */
export const permissions = (permissions: SitePermissionFlagsResolvable) => {
  return async (_req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals.auth;

    const user = await userService.getUserById(userId);
    if (!user) return next(new ApiError(HttpCodes.Unauthorized));

    const userPermissions = new SitePermissions(user.sitePermissions);
    if (!userPermissions.has(permissions))
      return next(new ApiError(HttpCodes.Unauthorized));

    return next();
  };
};
