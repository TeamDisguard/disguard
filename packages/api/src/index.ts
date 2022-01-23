import "dotenv/config";
import "module-alias/register";

import { Logger } from "./lib/utils/Logger";
import express from "express";
import useragent from "express-useragent";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;

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

// TODO: /api/v1

// TODO: handle 404 error

// TODO: error handler

app.listen(port, () => {
  Logger.info(`Listening on http://localhost:${port}`);
});
