import { Response } from "express";
import HttpStatus from "http-status-codes";
import { IHttpResponse } from "../interfaces";

class HttpResponse implements IHttpResponse {
  success(response: Response, data: any, message: string) {
    return response.send({ data, message, success: true });
  }

  error(response: Response, error: any) {
    return response.status(error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }

  unAuthorized(response: Response, error: any) {
    response.status(error.statusCode || HttpStatus.UNAUTHORIZED).send(this.responseBody("unauthorized", null, error.message || error));
  }

  responseBody = (status: string, data: any, message = null) => {
    return {
      data,
      status,
      message,
    };
  };
}

export const HttpCode = {
  NOT_FOUND: HttpStatus.NOT_FOUND,
};

export default new HttpResponse();
