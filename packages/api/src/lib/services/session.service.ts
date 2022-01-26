import { Database } from "@disguard/database";
import { DisguardSnowflake } from "@disguard/snowflake-engine";
import { Token } from "@disguard/token-engine";
import { encrypt } from "@disguard/crypto";
import { encryptionKey } from "#config";

export const createDevice = (data: DeviceData) => {
  return Database.client().device.create({
    data: {
      id: DisguardSnowflake.generate(),
      system: data.system,
      browser: data.browser,
      version: data.version,
      session: {
        connect: {
          id: data.sessionId
        }
      }
    }
  });
};

export const createSession = async (data: SessionData) => {
  const token = await Token.generate({ userId: data.userId });
  const expiresAt = new Date(Date.now() + data.expiresIn);

  const session = await Database.client().session.create({
    include: {
      device: true
    },
    data: {
      id: DisguardSnowflake.generate(),
      invalid: false,
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

  const device = await createDevice({ sessionId: session.id, ...data.device });

  session.token = token.toString();
  session.device = device;
  return session;
};

export const getSession = (userId: string, version: string) => {
  return Database.client().session.findFirst({
    include: {
      device: true
    },
    where: {
      userId,
      version
    }
  });
};

export const getSessionById = (id: string) => {
  return Database.client().session.findFirst({
    where: {
      id,
      invalid: false
    }
  });
};

export const getSessionsForUser = (userId: string) => {
  return Database.client().session.findMany({
    include: {
      device: true
    },
    where: {
      userId,
      invalid: false
    }
  });
};

export const deleteSession = async (userId: string, id: string) => {
  const session = await getSessionById(id);
  if (!session || session.userId !== userId) return null;

  return Database.client().session.update({
    where: {
      id
    },
    data: {
      invalid: true
    }
  });
};

export interface DeviceData {
  sessionId: string;
  system: string;
  browser: string;
  version: string;
}

export interface SessionData {
  userId: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  device: Omit<DeviceData, "sessionId">;
}
