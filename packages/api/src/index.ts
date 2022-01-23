import "dotenv/config";

import moduleAias from "module-alias";
import path from "path";

moduleAias.addAliases({
  "#lib": path.join(__dirname, "lib"),
  "#config": path.join(__dirname, "config.js"),
  "#consts": path.join(__dirname, "constants.js")
});

import { Logger, v1Router } from "#lib";
import { port } from "#config";

import express from "express";
import useragent from "express-useragent";
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

// Register v1 api routes
app.use("/api/v1", v1Router);

// TODO: handle 404 error

// TODO: error handler

app.listen(port, () => {
  Logger.info(`Listening on http://localhost:${port}`);
});
