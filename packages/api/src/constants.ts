import { OAuth2Scopes } from "discord-api-types";
import { URL, URLSearchParams } from "url";
import { host, discord } from "#config";

export const snowflakeRegex = /^\d{18,20}$/;

export const endpoints = {
  authorize: "https://discord.com/api/oauth2/authorize",
  token: "https://discord.com/api/oauth2/token",
  redirectUri: `${host}/api/v1/auth/callback`,
  user: (id: string) => `https://discord.com/api/v9/users/${id}`
};

export const grantTypes = {
  authorizationCode: "authorization_code",
  refreshToken: "refresh_token"
};

const oauth2UrlParams = new URLSearchParams({
  client_id: discord.clientId,
  redirect_uri: endpoints.redirectUri,
  response_type: "code",
  scope: OAuth2Scopes.Identify
});

export const oauth2Url = new URL(`${endpoints.authorize}?${oauth2UrlParams}`).toString();

export enum HttpCodes {
  Ok = 200,
  Created,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized,
  Forbidden = 403,
  NotFound,
  Conflict = 409,
  InternalServerError = 500
}

export const errorCodes = {
  [HttpCodes.BadRequest]: "bad-request",
  [HttpCodes.Unauthorized]: "unauthorized",
  [HttpCodes.Forbidden]: "forbidden",
  [HttpCodes.NotFound]: "not-found",
  [HttpCodes.Conflict]: "conflict",
  [HttpCodes.InternalServerError]: "internal-error"
};

export const errorMessages = {
  [HttpCodes.BadRequest]: "Bad Request",
  [HttpCodes.Unauthorized]: "Unauthorized",
  [HttpCodes.Forbidden]: "Forbidden",
  [HttpCodes.NotFound]: "Not Found",
  [HttpCodes.Conflict]: "Conflict",
  [HttpCodes.InternalServerError]: "Internal Server Error"
};

// Prefix error messages with http code
for (const errorCode of Reflect.ownKeys(errorMessages)) {
  Reflect.defineProperty(errorMessages, errorCode, {
    value: `${errorCode.toString()}: ${Reflect.get(errorMessages, errorCode)}`
  });
}

export default {
  HttpCodes,
  errorCodes,
  errorMessages
};
