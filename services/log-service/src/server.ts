import config from "./configs";
import App from "./loaders/app";
import { router } from "./routes";
import express, { Application } from "express";
// import http from 'http';
import dbConnection from "./connections/mongodb-connection";
const app: Application = express();
new App(app).init();

dbConnection.initMongoDb((error: Error, dbObj?: any) => {
  if (error) {
    console.log(error);
  } else {
    const server = app.listen(config.SERVER_PORT, () => {
      console.log(`Listening at http://${config.HOST}:${config.SERVER_PORT}`);
    });
  }
});
