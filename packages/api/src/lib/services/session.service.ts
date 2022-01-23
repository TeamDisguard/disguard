import { Database } from "@disguard/database";
import { DisguardSnowflake } from "@disguard/snowflake-engine";
import { Token } from "@disguard/token-engine";
import { encrypt } from "@disguard/crypto";
import { encryptionKey } from "#config";

export const createSession = async (data: SessionData) => {
  const token = await Token.generate({ userId: data.userId });
  const expiresAt = new Date(Date.now() + data.expiresIn);

  const session = await Database.client().session.create({
    data: {
      id: DisguardSnowflake.generate(),
      invalid: false,
      device: data.device,
      accessToken: encrypt(encryptionKey, data.accessToken),
      refreshToken: encrypt(encryptionKey, data.refreshToken),
      token: token.saltedHash,
      version: token.version,
      expiresAt,
      user: {
        connect: {
          id: data.userId
        }
      }
    }
  });

  session.token = token.toString();
  return session;
};

export const getSession = (userId: string, version: string) => {
  return Database.client().session.findFirst({
    where: {
      userId,
      version
    }
  });
};

export const getSessionById = (id: string) => {
  return Database.client().session.findUnique({
    where: {
      id
    }
  });
};

export interface SessionData {
  userId: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  device: string;
}
