export enum HttpCodes {
  Ok = 200,
  Created,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized,
  Forbidden = 403,
  NotFound,
  InternalServerError = 500
}

export const errorCodes = {
  [HttpCodes.BadRequest]: "bad-request",
  [HttpCodes.Unauthorized]: "unauthorized",
  [HttpCodes.Forbidden]: "forbidden",
  [HttpCodes.NotFound]: "not-found",
  [HttpCodes.InternalServerError]: "internal-error"
};

export const errorMessages = {
  [HttpCodes.BadRequest]: "Bad Request",
  [HttpCodes.Unauthorized]: "Unauthorized",
  [HttpCodes.Forbidden]: "Forbidden",
  [HttpCodes.NotFound]: "Not Found",
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
