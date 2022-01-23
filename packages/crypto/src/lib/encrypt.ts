import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

/**
 * Encrypts data using the aes-256-cbc algorithm
 * @param key The cipher key
 * @param data The data to encrypt
 */
export const encrypt = (key: string, data: string): string => {
  const iv = randomBytes(16);
  const cipher = createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
};

/**
 * Decrypts data using the aes-256-cbc algorithm
 * @param key The decipher key
 * @param data The data to decrypt
 */
export const decrypt = (key: string, data: string): string => {
  const [hexIv, encryptedData] = data.split(":");
  const iv = Buffer.from(hexIv, "hex");
  const encrypted = Buffer.from(encryptedData, "hex");
  const decipher = createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString();
};
