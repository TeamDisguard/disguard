import { PrismaClient } from "@disguard/prisma/src/client";
import { Logger } from "./Logger";

export class Database {
  /**
   * The singleton Database instance
   */
  public static _instance: Database;

  /**
   * The PrismaClient client instance
   */
  #client: PrismaClient;

  public constructor() {
    if (Database._instance)
      throw Error("Database is a singleton, cannot create new instance");

    const client = new PrismaClient({
      datasources: {
        db: {
          url: process.env.POSTGRESQL_URI
        }
      },
      errorFormat: "pretty",
      rejectOnNotFound: {
        findFirst: false,
        findUnique: false
      },
      log: [
        { level: "info", emit: "event" },
        { level: "warn", emit: "event" },
        { level: "error", emit: "event" }
      ]
    });

    client.$use(async (params, next) => {
      const startTime = Date.now();
      const result = await next(params);
      const timeTook = Date.now() - startTime;

      Logger.info(`Query ${params.model}.${params.action} took ${timeTook}ms`);

      return result;
    });

    client.$on("info", (data) => Logger.info(data.message));
    client.$on("warn", (data) => Logger.warn(data.message));
    client.$on("error", (data) => Logger.error(data.message));

    this.#client = client;
  }

  /**
   * Get the prisma client
   */
  public static client(): PrismaClient {
    if (!Database._instance) Database._instance = new Database();
    return Database._instance.#client;
  }
}
