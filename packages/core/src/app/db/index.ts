import { logger, sleep } from "../utils";
import { MongoClient, Db } from "mongodb";
import IDbConfig from "../../configs/interfaces/db";

let retrys = 0;

class MongoConnection {
  private static instance: MongoConnection;
  public dbInstance: Db;
  public mongoClient: MongoClient;

  private constructor(private dbConfigs: IDbConfig) {
    this.mongoClient = new MongoClient(resolveURI(this.dbConfigs));
    this.dbInstance = this.mongoClient.db(this.dbConfigs.dbName);
  }

  public static getInstance(dbConfigs: IDbConfig): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection(dbConfigs);
    }

    return MongoConnection.instance;
  }

  async init() {
    try {
      await this.mongoClient.connect();
      logger.info("DB connected successfully.");
    } catch (error) {
      logger.info(`Could not connect at attempt: ${retrys + 1}`);

      if (retrys < 5) {
        retrys++;
        await sleep(5000);
        logger.info("Retry Db connection");
        await this.init();
      } else {
        logger.error("Could not connect to DB.", error as any);
        process.exit(1);
      }
    }
  }
}

function resolveURI(mongoDbConfig: IDbConfig) {
  const clusterName = mongoDbConfig.host;
  const userName = encodeURIComponent(mongoDbConfig.username);
  const password = encodeURIComponent(mongoDbConfig.password);
  const connectionString = `${mongoDbConfig.protocol}://${userName}:${password}@${clusterName}:${mongoDbConfig.port}/`;

  return connectionString;
}

export default MongoConnection;
