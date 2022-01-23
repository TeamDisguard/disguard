import type { Response } from "express";
import { ApiResponseJson } from "#lib";
import { HttpCodes } from "#consts";

export class ApiResponse<T = unknown | unknown[]> {
  /**
   * The json data
   */
  public data?: ApiResponseJson<T>;

  /**
   * @param status The response status code
   * @param _res The response
   */
  public constructor(public status: HttpCodes, private _res: Response) {}

  /**
   * Set the json data
   * @param data The json data
   */
  public setData(data: ApiResponseJson<T>): this {
    this.data = data;
    return this;
  }

  /**
   * Sends the response
   */
  public send(): void {
    if (!this.data) return void this._res.sendStatus(this.status);
    return void this._res.status(this.status).json(this.data.toJSON());
  }
}
