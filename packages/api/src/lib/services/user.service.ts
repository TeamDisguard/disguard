import type { RESTGetAPICurrentUserResult } from "discord-api-types/rest/v9";
import type { User } from "@disguard/prisma/src/client";
import { endpoints, snowflakeRegex } from "#consts";
import { Database } from "@disguard/database";
import { SitePermissions } from "#lib";
import axios from "axios";

/**
 * Get the Discord user for the associated access token
 * @param token The user access token
 */
export const getSelf = async (
  token: string
): Promise<RESTGetAPICurrentUserResult | null> => {
  try {
    const res = await axios.get(endpoints.user("@me"), {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    return res.data;
  } catch {
    return null;
  }
};

/**
 * Get a user by id
 * @param id The id of the user
 */
export const getUserById = (id: string) => {
  return Database.client().user.findUnique({
    where: {
      id
    }
  });
};

/**
 * Search for a user by id or username
 * @param query The username or id query
 * @param limit The max results to return
 */
export const searchUser = async (query: string, limit: number) => {
  const isSnowflake = snowflakeRegex.test(query);

  if (isSnowflake) {
    const user = await getUserById(query);
    return user ? [user] : [];
  }

  return Database.client().user.findMany({
    orderBy: {
      _relevance: {
        fields: "username",
        search: query,
        sort: "asc"
      }
    },
    take: limit
  });
};

/**
 * Upsert a user
 * @param data The upsert user data
 */
export const upsertUser = (data: UserData): Promise<User> => {
  return Database.client().user.upsert({
    where: {
      id: data.id
    },
    create: {
      id: data.id,
      username: data.username,
      discriminator: data.discriminator,
      avatar: data.avatar,
      sitePermissions: new SitePermissions().bitfield
    },
    update: {
      username: data.username,
      discriminator: data.discriminator,
      avatar: data.avatar
    }
  });
};

export interface UserData {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
}
