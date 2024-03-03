import { IAppConfig } from "./interface";
import envSchema from "./validation-schemas/env-schema";
import ConfigSerivce, { EnvConfiguration, IDbConfig } from "@repo/core/config";

class Config {
  private envData: EnvConfiguration<typeof envSchema>;

  constructor() {
    const newConfig = new ConfigSerivce<typeof envSchema>();
    newConfig.init(envSchema);

    this.envData = newConfig.config!;
  }

  get config() {
    return this.envData;
  }

  get appConfigs(): IAppConfig {
    return { port: this.envData.SERVER_PORT };
  }

  get dbConfigs(): IDbConfig {
    const env = this.envData;

    return {
      port: 123,
      protocol: "mongodb+srv",
      dbName: env.MONGODB_NAME,
      host: env.MONGODB_CLUSTER_NAME,
      password: env.MONGODB_PASSWORD,
      username: env.MONGODB_USERNAME,
    };
  }
}

export default new Config();

export type { IAppConfig };
