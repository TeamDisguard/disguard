import type { RESTGetAPICurrentUserResult } from "discord-api-types/rest/v9";
import type { User } from "@disguard/prisma/src/client";
import { Database } from "@disguard/database";
import { SitePermissions } from "#lib";
import { endpoints } from "#consts";
import axios from "axios";

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
