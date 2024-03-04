import { ObjectSchema } from "joi";
import { ClientError } from "../helpers";
import { IHttpResponse } from "../interfaces";
import { NextFunction, Request, Response } from "express";

class Validation {
  constructor(private httpResponse: IHttpResponse) {}

  validate(schema: ObjectSchema) {
    return (request: Request, response: Response, next: NextFunction) => {
      try {
        const { error, value } = schema.validate(request.body, { allowUnknown: true });
        if (error) {
          const { details } = error;
          throw new ClientError(details?.map((i: any) => i.message).join(","));
        }
        request.body = value;
        next();
      } catch (error: any) {
        this.httpResponse.error(response, error);
      }
    };
  }
}

export default Validation;
