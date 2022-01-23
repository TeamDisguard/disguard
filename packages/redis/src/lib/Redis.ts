import { Logger } from "./Logger";
import IORedis from "ioredis";

export class Redis {
  /**
   * The singleton Redis instance
   */
  public static _instance: Redis;

  /**
   * The IORedis client instance
   */
  #client: IORedis.Redis;

  public constructor() {
    if (Redis._instance) throw Error("Redis is a singleton, cannot create new instance");

    this.#client = new IORedis(process.env.REDIS_URI);

    this.#client.on("connect", () => {
      Logger.info("Connected to redis");
    });

    this.#client.on("error", (error) => {
      if (error.code === "ECONNREFUSED") this.#client.disconnect(false);
      Logger.error(error);
    });
  }

  /**
   * Get the redis client
   */
  public static client(): IORedis.Redis {
    if (!Redis._instance) Redis._instance = new Redis();
    return Redis._instance.#client;
  }
}
