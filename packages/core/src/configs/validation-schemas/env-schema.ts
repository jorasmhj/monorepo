import { z } from "zod";

const envSchema = z.object({
  ALGORITHM: z.string(),
  JWT_SECRET: z.string(),

  SECRET_KEY: z.string(),
  REDIS_HOST: z.string(),
  REDIS_USER: z.string(),
  MONGODB_NAME: z.string(),

  REDIS_PASSWORD: z.string(),
  LOG_SERVICE_URL: z.string(),
  MONGODB_USERNAME: z.string(),

  MONGODB_PASSWORD: z.string(),
  COMMS_SERVICE_URL: z.string(),
  REQUEST_APP_VITAFY: z.string(),
  REQUEST_APP_MOBILE: z.string(),

  TENANT_SERVICE_URL: z.string(),
  CLIENT_SERVICE_URL: z.string(),
  LOOKUP_SERVICE_URL: z.string(),

  REQUEST_APP_HOLISTA: z.string(),
  UTILITY_SERVICE_URL: z.string(),
  CONTACT_SERVICE_URL: z.string(),
  MONGODB_CLUSTER_NAME: z.string(),
  REDIS_PORT: z.string().pipe(z.coerce.number()),
  SERVER_PORT: z.string().pipe(z.coerce.number()),
  NODE_ENV: z.enum(["DEVELOPMENT", "QA", "UAT", "PROD", "FEAT"]),
});

export default envSchema;
