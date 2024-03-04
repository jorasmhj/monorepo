import { z } from "zod";
import envSchema from "../validation-schemas/env-schema";

export type EnvConfiguration = z.infer<typeof envSchema> & {
  [key: string]: any;
};
