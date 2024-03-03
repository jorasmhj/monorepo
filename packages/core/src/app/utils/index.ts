import logger from "./logger";

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { logger };
