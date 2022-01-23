export class MissingEnvVariableError extends Error {
  /**
   * @param envVariable The variable missing from process.env
   */
  public constructor(public envVariable: string) {
    super(`Missing environment variable: ${envVariable}`);
  }
}
