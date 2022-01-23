const bigintTimestamp = (timestamp: number | bigint | Date): bigint =>
  BigInt(timestamp instanceof Date ? timestamp.getTime() : timestamp);

export class Snowflake {
  /**
   * The snowflake epoch timestamp
   */
  #epoch: bigint;

  /**
   * The increment stored in generated snowflakes
   */
  #increment = 0n;

  /**
   * @param epoch The snowflake epoch timestamp
   */
  public constructor(epoch: number | bigint | Date) {
    this.#epoch = bigintTimestamp(epoch);
  }

  /**
   * Generates a snowflake id
   * @param options The options for the snowflake
   */
  public generate(options: Partial<SnowflakeGenerateOptions> = {}): snowflake {
    const workerId = options.workerId ?? 0n;
    const processId = options.processId ?? 1n;
    const timestamp = bigintTimestamp(options.timestamp ?? Date.now());

    let increment = options.increment;
    if (typeof increment === "bigint" && increment >= 4095n) {
      increment = 0n;
    } else {
      increment = this.#increment++;
      if (this.#increment >= 4095n) this.#increment = 0n;
    }

    const snowflake =
      ((timestamp - this.#epoch) << 22n) |
      ((workerId & 0b11111n) << 17n) |
      ((processId & 0b11111n) << 12n) |
      increment;

    return String(snowflake);
  }

  /**
   * Deconstructs a snowflake
   * @param snowflake The snowflake id
   */
  public deconstruct(snowflake: snowflake): DeconstructedSnowflake {
    const id = BigInt(snowflake);

    return {
      epoch: this.#epoch,
      workerId: (id >> 17n) & 0b11111n,
      processId: (id >> 12n) & 0b11111n,
      increment: id & 0b111111111111n,
      timestamp: (id >> 22n) + this.#epoch
    };
  }
}

export type snowflake = string;

export interface SnowflakeGenerateOptions {
  /**
   * The id of the worker generating the snowflake
   */
  workerId: bigint;
  /**
   * The id of the process generating the snowflake
   */
  processId: bigint;
  /**
   * The increment stored in the snowflake
   */
  increment: bigint;
  /**
   * The timestamp of the snowflake
   */
  timestamp: number | bigint | Date;
}

export interface DeconstructedSnowflake {
  /**
   * The snowflake epoch timestamp
   */
  epoch: bigint;
  /**
   * The id of the worker that generated the snowflake
   */
  workerId: bigint;
  /**
   * The id of the process that generated the snowflake
   */
  processId: bigint;
  /**
   * The increment stored in the snowflake
   */
  increment: bigint;
  /**
   * The timestamp of the snowflake
   */
  timestamp: bigint;
}
