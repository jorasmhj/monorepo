import { AnyZodObject, z } from "zod";

export type EnvConfiguration<T extends AnyZodObject> = z.infer<T> & {
  [key: string]: any;
};
