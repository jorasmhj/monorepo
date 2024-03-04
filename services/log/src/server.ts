import config from "./configs";
import App from "./loaders/app";
import { logger } from "@repo/core/utils";
import express, { Application } from "express";
import dbConnection from "./connections/mongodb-connection";

const app: Application = express();
new App(app).init();

dbConnection.initMongoDb((error: Error) => {
  if (error) {
    logger.info(error);
  } else {
    app.listen(config.SERVER_PORT, () => {
      logger.info(`Listening at http://${config.HOST}:${config.SERVER_PORT}`);
    });
  }
});
