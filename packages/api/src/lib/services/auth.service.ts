import type { RESTPostOAuth2AccessTokenResult } from "discord-api-types";
import { URL, URLSearchParams } from "url";
import { discord } from "#config";
import { endpoints, grantTypes } from "#consts";
import axios from "axios";

/**
 * Trades a Discord OAuth2 code with an access token
 * @param code The Discord callback code
 */
export const authorizationCode = async (
  code: string
): Promise<RESTPostOAuth2AccessTokenResult | null> => {
  const urlParams = new URLSearchParams({
    grant_type: grantTypes.authorizationCode
  });

  const url = new URL(`${endpoints.token}?${urlParams}`).toString();

  const params = new URLSearchParams({
    client_id: discord.clientId,
    client_secret: discord.clientSecret,
    redirect_uri: endpoints.redirectUri,
    code
  }).toString();

  try {
    const res = await axios.post<RESTPostOAuth2AccessTokenResult>(url, params);
    return res.data;
  } catch {
    return null;
  }
};

// TODO: Handle refresh tokens
