import "dotenv/config";

import moduleAias from "module-alias";
import path from "path";

moduleAias.addAliases({
  "#lib": path.join(__dirname, "lib"),
  "#config": path.join(__dirname, "config.js"),
  "#consts": path.join(__dirname, "constants.js")
});

import { Logger, v1Router, ApiError, convertError, handleError } from "#lib";
import { HttpCodes } from "#consts";
import { port } from "#config";

import express from "express";
import useragent from "express-useragent";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Enable cors
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true
  })
);

// Parse json body
app.use(express.json());

// Parse urlencoded body
app.use(express.urlencoded({ extended: true }));

// Parse user agent
app.use(useragent.express());

// Parse cookies
app.use(cookieParser());

// Register v1 api routes
app.use("/api/v1", v1Router);

// Handle 404 Not Found errors
app.use((req, _res, next) => {
  let url = req.url.split("?")[0];
  if (url.endsWith("/")) url = url.slice(0, -1);
  next(new ApiError(HttpCodes.NotFound).setInfo(`Route \`${url}\` not found.`));
});

// Convert errors into ApiErrors
app.use(convertError);

// Handle errors
app.use(handleError);

// Start app
app.listen(port, () => {
  Logger.info(`Listening on http://localhost:${port}`);
});
