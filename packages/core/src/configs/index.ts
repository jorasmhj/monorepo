import dotenv from "dotenv";
import { AnyZodObject } from "zod";
import IDbConfig from "./interfaces/db";
import validateConfig from "./config-validation";
import { EnvConfiguration } from "./interfaces/env";

dotenv.config();

class ConfigSerivce<T extends AnyZodObject> {
  private envData: EnvConfiguration<T> | null = null;

  init(schema: T) {
    this.envData = validateConfig<EnvConfiguration<T>>(process.env, schema);
  }

  get config() {
    return this.envData;
  }
}

export default ConfigSerivce;
export { validateConfig, dotenv };
export type { AnyZodObject, EnvConfiguration, IDbConfig };
