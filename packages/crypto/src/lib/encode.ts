/**
 * Encodes data using the base64 algorithm
 * @param data The data to encode
 */
export const base64 = (data: string) => {
  return Buffer.from(data).toString("base64url");
};
