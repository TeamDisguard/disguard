import { HttpCodes, errorCodes, errorMessages } from "#consts";
import { environment, serverName as server } from "#config";

export class ApiError extends Error {
  /**
   * The HTTP error code
   */
  public status: HttpCodes;

  /**
   * Additional information about the error
   */
  public info?: string;

  /**
   * @param status The HTTP error code
   */
  public constructor(status: HttpCodes, stack?: string) {
    super();
    this.status = status;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  /**
   * Sets additional information about the error
   * @param info The info
   */
  public setInfo(info?: string): this {
    this.info = info;
    return this;
  }

  /**
   * Get the JSON representation of the error
   */
  public toJSON(): ApiErrorJSON {
    return {
      code: Reflect.get(errorCodes, this.status),
      message: Reflect.get(errorMessages, this.status),
      info: this.info ?? "Not additional information available.",
      environment,
      server
    };
  }
}

export interface ApiErrorJSON {
  /**
   * The internal code for the error
   */
  code: string;
  /**
   * A short message describing the error
   */
  message: string;
  /**
   * Additional information about the error
   */
  info: string;
  /**
   * The application environment
   */
  environment: "production" | "development";
  /**
   * The name of the origin server
   */
  server: string;
}
