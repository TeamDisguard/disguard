import type { Details } from "express-useragent";

export const getDevice = (userAgent?: Details) => {
  if (!userAgent) {
    return {
      system: "Unknown",
      browser: "Unknown",
      version: "Unknown"
    };
  }

  return {
    system: userAgent.os === "unknown" ? "Unknown" : userAgent.os,
    browser: userAgent.browser === "unknown" ? "Unknown" : userAgent.browser,
    version: userAgent.version === "unknown" ? "Unknown" : userAgent.version
  };
};
