import dotenv from "dotenv";
import validateConfig from "./config-validation";
import { EnvConfiguration } from "./interfaces/env";
import envSchema from "./validation-schemas/env-schema";

dotenv.config();

class ConfigSerivce {
  private envData: EnvConfiguration;

  constructor() {
    this.envData = validateConfig<EnvConfiguration>(process.env, envSchema);
  }

  get config() {
    return this.envData;
  }
}

export default new ConfigSerivce().config;
