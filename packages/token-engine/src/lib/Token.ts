import { sha1, bcryptHash } from "@disguard/crypto";
import { randomBytes } from "crypto";

export class Token {
  /**
   * Generates a token
   * @param options The options for the token
   */
  public static async generate(options: TokenGenerateOptions): Promise<GeneratedToken> {
    const userId = Buffer.from(options.userId).toString("base64url");
    const version = randomBytes(6).toString("base64url");

    const token = randomBytes(16).toString("hex");
    const hash = sha1(token);
    const saltedHash = await bcryptHash(hash);

    const toString = () => `${userId}.${version}.${hash}`;

    return { userId, version, hash, saltedHash, toString };
  }

  /**
   * Deconstructs a token
   * @param token The token to deconstruct
   */
  public static deconstruct(token: string): DeconstructedToken {
    const [encodedUserId, version, hash] = token.split(".");
    if (!encodedUserId || !version || !hash) throw new Error("Not well formed token");
    const userId = Buffer.from(encodedUserId, "base64url").toString();
    return { userId, version, hash };
  }
}

export interface GeneratedToken {
  /**
   * The id of the token's owner
   */
  userId: string;
  /**
   * A random value generated alongside the token
   */
  version: string;
  /**
   * A SHA1 hash of the contents of the token
   */
  hash: string;
  /**
   * The salted token hash
   */
  saltedHash: string;
  /**
   * The authorization token
   */
  toString(): string;
}

export interface TokenGenerateOptions {
  /**
   * The id of the token's owner
   */
  userId: string;
}

export interface DeconstructedToken {
  /**
   * The id of the token's owner
   */
  userId: string;
  /**
   * A random value generated alongside the token
   */
  version: string;
  /**
   * A SHA1 hash of the contents of the token
   */
  hash: string;
}
