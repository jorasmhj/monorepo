import { AnyZodObject } from "zod";
import logger from "../utils/logger";

const validateConfig = <T>(config: any, schema: AnyZodObject, schemaName?: string) => {
  const result = schema.safeParse(config);

  if (!result.success) {
    logger.error(result.error.format(), `Environment Variable Validation failed, ${schemaName}:`);
    process.exit(1);
  }

  return result.data as T;
};

export default validateConfig;
