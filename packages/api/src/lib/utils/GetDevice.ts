import type { Details } from "express-useragent";

export const getDevice = (userAgent?: Details) => {
  if (!userAgent) return "Unknown, Unknown (Unknown)";
  const os = userAgent.os === "unknown" ? "Unknown" : userAgent.os;
  const browser = userAgent.browser === "unknown" ? "Unknown" : userAgent.browser;
  const version = userAgent.version === "unknown" ? "Unknown" : userAgent.version;

  return `${os}, ${browser} (${version})`;
};
