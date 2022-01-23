import { LogLevels, LogLevel, LoggerColor, Defaults } from "../index";
import Winston, { format, transport, transports } from "winston";
import "winston-daily-rotate-file";
import { inspect } from "util";
import { join } from "path";

const colorizer = format.colorize();

export class Logger {
  /**
   * The directory that holds the log files.
   */
  public logFilesDirectory: string;

  /**
   * The name of the main log file.
   */
  public mainLogFileName: string;

  /**
   * The name of the error log file.
   */
  public errorLogFileName: string;

  /**
   * Whether or not console logs are enabled.
   */
  public enableConsoleLogs: boolean;

  /**
   * Whether or not main file logs are enabled.
   */
  public enableMainLogFile: boolean;

  /**
   * Whether or not error file logs are enabled.
   */
  public enableErrorLogFile: boolean;

  /**
   * The format of the log timestamp.
   */
  public timestampFormat: string;

  /**
   * The date format for the log files.
   */
  public fileDateFormat: string;

  /**
   * Whether or not to gzip archived log files.
   */
  public zippedArchive: boolean;

  /**
   * The maximum file size which triggers a file rotate.
   * Use the format "SizeUnit":
   * Size is a number, Unit is either k (for kb), m (for mb), g (for gb)
   * @example 1k
   * @example 1m
   * @example 1g
   */
  public maxSize: string;

  /**
   * The maximum count of files which triggers a file rotate.
   * Use a number for file count,
   * or a number suffixed by "d" for the amount of days to keep
   */
  public maxFiles: string;

  /**
   * The source name.
   */
  public source?: string;

  /**
   * The winston logger.
   */
  #winston: Winston.Logger;

  /**
   * @param options The logger options.
   */
  public constructor(options: Partial<LoggerOptions>) {
    const logFilesDirectory = options.logFilesDirectory ?? Defaults.logFilesDirectory;
    this.logFilesDirectory = join(process.cwd(), logFilesDirectory);

    this.mainLogFileName = options.mainLogFileName ?? Defaults.mainLogFileName;
    this.errorLogFileName = options.errorLogFileName ?? Defaults.errorLogFileName;
    this.timestampFormat = options.timestampFormat ?? Defaults.timestampFormat;
    this.enableConsoleLogs = options.enableConsoleLogs ?? true;
    this.enableMainLogFile = options.enableMainLogFile ?? false;
    this.enableErrorLogFile = options.enableErrorLogFile ?? false;
    this.fileDateFormat = options.fileDateFormat ?? Defaults.fileDateFormat;
    this.zippedArchive = options.zippedArchive ?? true;
    this.maxSize = options.maxSize ?? Defaults.maxSize;
    this.maxFiles = options.maxFiles?.toString() ?? Defaults.maxFiles.toString();
    this.source = options.source;

    if (!this.enableConsoleLogs && !this.enableMainLogFile && !this.enableErrorLogFile) {
      throw new Error("You must enable at least one transport.");
    }

    Winston.addColors(options.colors ?? Defaults.colors);

    this.#winston = Winston.createLogger({
      transports: this.createTransports(),
      levels: LogLevels
    });
  }

  /**
   * Prints a line using the info level.
   * @param message The message to log
   * @param meta The meta data
   */
  public log(message: unknown, ...meta: unknown[]) {
    this.info(message, ...meta);
  }

  /**
   * Prints a line using the info level.
   * @param message The message to log
   * @param meta The meta data
   */
  public info(message: unknown, ...meta: unknown[]) {
    this.#winston.info(this.inspect(message), { meta });
  }

  /**
   * Prints a line using the error level.
   * @param error The error to log
   * @param meta The meta data
   */
  public error(error: Error | string, ...meta: unknown[]) {
    const stack = error instanceof Error ? error.stack ?? error.message : error;
    const message = error instanceof Error ? error.message : error;
    this.#winston.error(message, { meta, stack });
  }

  /**
   * Prints a line using the warn level.
   * @param message The message to log
   * @param meta The meta data
   */
  public warn(message: string, ...meta: unknown[]) {
    this.#winston.warn(this.inspect(message), { meta });
  }

  /**
   * Prints a line using the verbose level.
   * @param message The message to log
   * @param meta The meta data
   */
  public verbose(message: string, ...meta: unknown[]) {
    this.#winston.verbose(this.inspect(message), { meta });
  }

  /**
   * Prints a line using the debug level.
   * @param message The message to log
   * @param meta The meta data
   */
  public debug(message: string, ...meta: unknown[]) {
    this.#winston.debug(this.inspect(message), { meta });
  }

  /**
   * Inspects a message.
   * @param message The message to inspect
   * @returns The inspected message
   */
  private inspect(message: unknown) {
    if (typeof message === "string") return message;
    return inspect(message, { depth: 1 });
  }

  /**
   * Creates the transports for the logger.
   * @returns The transports
   */
  private createTransports(): transport[] {
    const timestampFormat = this.createTimestampFormat();
    const consoleFormat = this.createConsoleFormat();

    const loggerTransports: transport[] = [];

    if (this.enableConsoleLogs) {
      const consoleTransport = new transports.Console({
        format: format.combine(timestampFormat, consoleFormat),
        level: LogLevel.DEBUG
      });

      loggerTransports.push(consoleTransport);
    }

    if (this.enableMainLogFile) {
      const mainFileTransport = new transports.DailyRotateFile({
        filename: join(this.logFilesDirectory, `${this.mainLogFileName}-%DATE%.log`),
        format: format.combine(timestampFormat, format.json()),
        zippedArchive: this.zippedArchive,
        datePattern: this.fileDateFormat,
        maxFiles: this.maxFiles,
        maxSize: this.maxSize,
        level: LogLevel.VERBOSE,
        utc: true
      });

      loggerTransports.push(mainFileTransport);
    }

    if (this.enableErrorLogFile) {
      const errorFileTransport = new transports.DailyRotateFile({
        filename: join(this.logFilesDirectory, `${this.errorLogFileName}-%DATE%.log`),
        format: format.combine(timestampFormat, format.json()),
        zippedArchive: this.zippedArchive,
        datePattern: this.fileDateFormat,
        maxFiles: this.maxFiles,
        maxSize: this.maxSize,
        level: LogLevel.WARN,
        utc: true
      });

      loggerTransports.push(errorFileTransport);
    }

    return loggerTransports;
  }

  /**
   * Creates a timestamp format.
   * @returns The timestamp format
   */
  private createTimestampFormat() {
    return format.timestamp({ format: this.timestampFormat });
  }

  /**
   * Creates a console format.
   * @returns The console format
   */
  private createConsoleFormat() {
    return format.printf(({ level, message, timestamp }) => {
      let consoleFormat = "";

      const colorizedTimestamp = colorizer.colorize("timestamp", `[${timestamp}]`);
      consoleFormat += `${colorizedTimestamp} `;

      if (this.source) {
        const colorizedSource = colorizer.colorize("source", this.source);
        consoleFormat += `${colorizedSource} `;
      }

      const colorizedLevel = colorizer.colorize(`${level}BG`, level);
      consoleFormat += `(${colorizedLevel}): `;

      const colorizedMessage = colorizer.colorize(level, message);
      consoleFormat += colorizedMessage;

      return consoleFormat;
    });
  }
}

export interface LoggerOptions {
  logFilesDirectory: string;
  mainLogFileName: string;
  errorLogFileName: string;
  timestampFormat: string;
  enableConsoleLogs: boolean;
  enableMainLogFile: boolean;
  enableErrorLogFile: boolean;
  fileDateFormat: string;
  zippedArchive: boolean;
  maxSize: string;
  maxFiles: string | number;
  source: string;
  colors: LoggerColors;
}

export type LoggerColors = Record<string, LoggerColor>;
