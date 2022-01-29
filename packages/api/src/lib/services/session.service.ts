import { Database } from "@disguard/database";
import { DisguardSnowflake } from "@disguard/snowflake-engine";
import { Token } from "@disguard/token-engine";
import { encrypt } from "@disguard/crypto";
import { encryptionKey } from "#config";

/**
 * Get a session by the token (excluding the hash part)
 * @param userId The id of the user
 * @param version The token version
 */
export const getSessionByUserIdAndVersion = (userId: string, version: string) => {
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

/**
 * Get a session by id
 * @param id The id of the session
 */
export const getSessionById = (id: string) => {
  return Database.client().session.findFirst({
    where: {
      id,
      invalid: false
    }
  });
};

/**
 * Get the valid sessions for a user
 * @param userId The id of the user
 */
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

/**
 * Create a device for a session
 * @param data The create device data
 */
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

/**
 * Create a session
 * @param data The create session data
 */
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
      accessToken: data.accessToken ? encrypt(encryptionKey, data.accessToken) : null,
      refreshToken: data.refreshToken ? encrypt(encryptionKey, data.refreshToken) : null,
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

/**
 * Delete a session
 * @param userId The id of the user
 * @param id The id of the session
 */
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
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number;
  device: Omit<DeviceData, "sessionId">;
}
