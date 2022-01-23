import { Logger as _Logger } from "@disguard/logger";

export const Logger = new _Logger({
  source: "Disguard",
  logFilesDirectory: "logs/main",
  mainLogFileName: "main.log",
  errorLogFileName: "main-errors.log",
  timestampFormat: "DD/MM/YYYY @ HH:mm:ss",
  fileDateFormat: "DD-MM-HH-YYYY",
  enableConsoleLogs: true,
  enableMainLogFile: true,
  enableErrorLogFile: true,
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "7d"
});
