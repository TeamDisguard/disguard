import type { RESTGetAPICurrentUserResult } from "discord-api-types/rest/v9";
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
