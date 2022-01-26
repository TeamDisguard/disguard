import {
  ApiError,
  ApiResponse,
  ApiResponseJson,
  catchServerError,
  sessionService
} from "#lib";

import { HttpCodes } from "#consts";

export const getMe = catchServerError(async (_req, res) => {
  const { session } = res.locals.auth;

  const device = {
    system: session.device?.system ?? "Unknown",
    browser: session.device?.browser ?? "Unknown",
    version: session.device?.version ?? "Unknown"
  };

  const data = new ApiResponseJson()
    .set("id", session.id)
    .set("device", device)
    .set("expires_at", session.expiresAt.toISOString())
    .set("created_at", session.createdAt.toISOString());

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const getMeSessions = catchServerError(async (_req, res, next) => {
  const { userId } = res.locals.auth;

  const sessions = await sessionService.getSessionsForUser(userId);
  if (!sessions.length) return next(new ApiError(HttpCodes.Unauthorized));

  const data = sessions.map((session) => ({
    id: session.id,
    device: {
      system: session.device?.system ?? "Unknown",
      browser: session.device?.browser ?? "Unknown",
      version: session.device?.version ?? "Unknown"
    },
    expires_at: session.expiresAt.toISOString(),
    created_at: session.createdAt.toISOString()
  }));

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const deleteMeSession = catchServerError(async (req, res) => {
  const { userId, session } = res.locals.auth;
  const { sessionId } = res.locals.params;

  if (req.params.sessionId === session.id) {
    throw new ApiError(HttpCodes.BadRequest).setInfo("Cannot delete current session.");
  }

  const deleted = await sessionService.deleteSession(userId, sessionId);
  if (!deleted) throw new ApiError(HttpCodes.NotFound).setInfo("Session was not found.");

  return new ApiResponse(HttpCodes.NoContent, res).send();
});
