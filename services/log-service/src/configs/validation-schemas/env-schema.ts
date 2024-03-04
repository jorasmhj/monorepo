import { z } from "zod";

const s3Schema = {
  S3_BUCKET: z.string(),
  S3_BASE_URL: z.string(),
  S3_ACCESS_KEY_ID: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
};

const dbSchema = {
  MONGODB_NAME: z.string(),
  MONGODB_PASSWORD: z.string(),
  MONGODB_USERNAME: z.string(),
  MONGODB_CLUSTER_NAME: z.string(),
};

const serviceAuthSchema = {
  NOVELTY_USER_NAME: z.string(),
  VITAFY_CLIENT_CODE: z.string(),
  NOVELTY_CLIENT_NAME: z.string(),
  NOVELTY_CLIENT_CODE: z.string(),
  NOVELTY_BASIC_TOKEN: z.string(),
  NOVELTY_USER_PASSWORD: z.string(),
  NOVELTY_APPLICATION_ID: z.string(),
  NOVELTY_APPLICATION_NAME: z.string(),
};

const envSchema = z.object({
  ...s3Schema,
  ...dbSchema,
  ...serviceAuthSchema,
  HOST: z.string(),
  JWT_SECRET: z.string(),
  CRYPTO_SECRET_KEY: z.string(),
  SERVER_PORT: z.string().pipe(z.coerce.number()),
  NODE_ENV: z.enum(["DEVELOPMENT", "QA", "UAT", "PROD", "FEAT"]),
});

export default envSchema;
