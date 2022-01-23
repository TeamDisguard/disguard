import { MissingEnvVariableError } from "#lib";
import os from "os";

export const requiredEnvVariables = [
  "HOST",
  "ENCRYPTION_KEY",
  "DISCORD_TOKEN",
  "DISCORD_CLIENT_ID",
  "DISCORD_CLIENT_SECRET"
];

// Ensure required env variables have loaded
for (const rev of requiredEnvVariables) {
  if (typeof process.env[rev] !== "string") {
    throw new MissingEnvVariableError(rev);
  }
}

// Augment process.env
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV?: "production" | "development";
      PORT?: string;
      HOST: string;
      ENCRYPTION_KEY: string;
      DISCORD_TOKEN: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
    }
  }
}

export const environment = process.env.NODE_ENV ?? "development";
export const serverName = os.hostname();

export const port = process.env.PORT ?? "3000";
export const host = process.env.HOST;

export const encryptionKey = process.env.ENCRYPTION_KEY;

export const discord = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET
};

export default {
  environment,
  serverName,
  port,
  host
};
