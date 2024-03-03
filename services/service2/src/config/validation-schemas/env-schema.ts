import { z } from "zod";

const envSchema = z.object({
  MONGODB_NAME: z.string(),

  MONGODB_USERNAME: z.string(),
  MONGODB_PASSWORD: z.string(),
  MONGODB_CLUSTER_NAME: z.string(),
  SERVER_PORT: z.string().pipe(z.coerce.number()),
});

export default envSchema;
