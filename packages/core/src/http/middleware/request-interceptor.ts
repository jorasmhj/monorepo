import { logger } from "../../app/utils";
import { NextFunction, Response, Request } from "express";

async function requestInterceptor(request: Request, _: Response, next: NextFunction) {
  const { body, query, params, method, originalUrl } = request;
  const host = request.get("host");

  logger.info({ body, query, params }, `Request received on ${method}:${originalUrl} from ${host}`);

  next();
}

export default requestInterceptor;
