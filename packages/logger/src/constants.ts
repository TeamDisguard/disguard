import type { LoggerOptions } from "./index";

export enum LogLevelSeverity {
  ERROR,
  WARN,
  LOG,
  INFO,
  VERBOSE,
  DEBUG
}

export enum LogLevel {
  ERROR = "error",
  WARN = "warn",
  LOG = "corelog",
  INFO = "info",
  VERBOSE = "verbose",
  DEBUG = "debug"
}

export const LogLevels = {
  [LogLevel.ERROR]: LogLevelSeverity.ERROR,
  [LogLevel.WARN]: LogLevelSeverity.WARN,
  [LogLevel.LOG]: LogLevelSeverity.LOG,
  [LogLevel.INFO]: LogLevelSeverity.INFO,
  [LogLevel.VERBOSE]: LogLevelSeverity.VERBOSE,
  [LogLevel.DEBUG]: LogLevelSeverity.DEBUG
};

export type FontForegroundColor =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray"
  | "grey";

export type FontBackgroundColor =
  | "blackBG"
  | "redBG"
  | "greenBG"
  | "yellowBG"
  | "blueBG"
  | "magentaBG"
  | "cyanBG"
  | "whiteBG";

export type FontStyle =
  | "bold"
  | "dim"
  | "italic"
  | "underline"
  | "inverse"
  | "hidden"
  | "strikethrough";

export type LoggerColor =
  | `${FontStyle} ${FontForegroundColor} ${FontBackgroundColor}`
  | `${FontStyle} ${FontForegroundColor}`
  | `${FontStyle} ${FontBackgroundColor}`
  | `${FontForegroundColor} ${FontBackgroundColor}`
  | FontStyle
  | FontForegroundColor
  | FontBackgroundColor;

// eslint-disable-next-line prettier/prettier
type DefaultOptions = Pick<LoggerOptions, "logFilesDirectory" | "mainLogFileName" | "errorLogFileName" | "timestampFormat" | "fileDateFormat" | "maxSize" | "maxFiles" | "colors">;

export const Defaults: DefaultOptions = {
  logFilesDirectory: "logs",
  mainLogFileName: "info",
  errorLogFileName: "error",
  timestampFormat: "DD/MM/YYYY @ HH:mm:ss",
  fileDateFormat: "DD-MM-HH-YYYY",
  maxSize: "2m",
  maxFiles: "14d",
  colors: {
    timestamp: "bold grey",
    source: "bold magenta",
    error: "red",
    warn: "yellow",
    info: "blue",
    verbose: "green",
    debug: "grey",
    errorBG: "bold red",
    warnBG: "bold yellow",
    infoBG: "bold blue",
    verboseBG: "bold green",
    debugBG: "bold grey"
  }
};
