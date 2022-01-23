import { createHash } from "crypto";
import { hash, compare } from "bcrypt";
import { SALT_ROUNDS } from "../constants";

export type shaAlgorithm = "sha1" | "sha256" | "sha384" | "sha512";

/**
 * Hashes data using a sha algorithm
 * @param algorithm The hashing algorithm
 * @param data The data to hash
 * @param length The length of the hash
 */
export const sha = (algorithm: shaAlgorithm, data: string, length?: number): string => {
  const hash = createHash(algorithm).update(data, "utf8").digest("hex");
  return length ? hash.slice(0, length) : hash;
};

/**
 * Hashes data using the sha1 algorithm
 * @param data The data to hash
 * @param length The length of the hash
 */
export const sha1 = (data: string, length?: number): string => {
  return sha("sha1", data, length);
};

/**
 * Hashes data using the sha256 algorithm
 * @param data The data to hash
 * @param length The length of the hash
 */
export const sha256 = (data: string, length?: number): string => {
  return sha("sha256", data, length);
};

/**
 * Hashes data using the sha384 algorithm
 * @param data The data to hash
 * @param length The length of the hash
 */
export const sha384 = (data: string, length?: number): string => {
  return sha("sha384", data, length);
};

/**
 * Hashes data using the sha512 algorithm
 * @param data The data to hash
 * @param length The length of the hash
 */
export const sha512 = (data: string, length?: number): string => {
  return sha("sha512", data, length);
};

/**
 * Hashes data using the bcrypt algorithm
 * @param data The data to hash
 */
export const bcryptHash = (data: string): Promise<string> => {
  return hash(data, SALT_ROUNDS);
};

/**
 * Compares data to a hash
 * @param data The data to compare
 * @param hash The hashed data
 */
export const bcryptCompare = (data: string, hash: string): Promise<boolean> => {
  return compare(data, hash);
};
