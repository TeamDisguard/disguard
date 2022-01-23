import { Logger as _Logger } from "@disguard/logger";

export const Logger = new _Logger({
  source: "Redis",
  logFilesDirectory: "logs/redis",
  mainLogFileName: "redis.log",
  errorLogFileName: "redis-errors.log",
  timestampFormat: "DD/MM/YYYY @ HH:mm:ss",
  fileDateFormat: "DD-MM-HH-YYYY",
  enableConsoleLogs: true,
  enableMainLogFile: true,
  enableErrorLogFile: true,
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "7d"
});
