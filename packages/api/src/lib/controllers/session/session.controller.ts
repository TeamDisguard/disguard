import {
  ApiError,
  ApiResponse,
  ApiResponseJson,
  catchServerError,
  sessionService
} from "#lib";

import { HttpCodes } from "#consts";

export const getMe = catchServerError(async (_req, res) => {
  const { session } = res.locals;

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
  const sessions = await sessionService.getSessionsForUser(res.locals.userId);
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

export const deleteMeSession = catchServerError(async (req, res, next) => {
  if (req.params.sessionId === res.locals.session.id) {
    return next(
      new ApiError(HttpCodes.BadRequest).setInfo("Cannot delete current session.")
    );
  }

  const isDeleted = await sessionService.deleteSession(
    res.locals.userId,
    req.params.sessionId
  );

  if (!isDeleted) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Session was not found."));
  }

  return new ApiResponse(HttpCodes.NoContent, res).send();
});
