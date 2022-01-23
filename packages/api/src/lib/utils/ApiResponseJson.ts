export class ApiResponseJson<T = unknown | unknown[]> extends Map<string, T> {
  /**
   * Get the JSON representation of the response
   */
  public toJSON(): ApiResponseJsonJSON<T> {
    const json: ApiResponseJsonJSON<T> = {};
    for (const [key, value] of this.entries()) json[key] = value;
    return json;
  }
}

export type ApiResponseJsonJSON<T> = { [key: string]: T };
