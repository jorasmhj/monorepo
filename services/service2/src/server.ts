import App from "./app";
import config from "./config";
import { express } from "@repo/core";
import MongoConnection from "@repo/core/db";

async function startServer() {
  const expressApp = express.default();

  MongoConnection.getInstance(config.dbConfigs).init();
  const app = new App(expressApp, config.appConfigs);
  app.init();
}

startServer();
