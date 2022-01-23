import { MissingEnvVariableError } from "#lib";
import os from "os";

export const requiredEnvVariables = [];

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
    }
  }
}

export const environment = process.env.NODE_ENV ?? "development";
export const serverName = os.hostname();

export const port = process.env.PORT ?? "3000";

export default {
  environment,
  serverName,
  port
};
