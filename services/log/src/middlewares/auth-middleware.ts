import { Request } from "../types";
import { ClientError } from "../helpers";
import { IAuthUser } from "../interfaces";
import { messageConstant } from "../constants";
import { NextFunction, Response } from "express";
import { IHttpResponse, IToken } from "../interfaces";

class Authorization {
  constructor(
    private tokenHelper: IToken,
    private httpResponse: IHttpResponse
  ) {}

  authorize(request: Request, response: Response, next: NextFunction) {
    try {
      if (!request.headers.authorization) throw new ClientError(messageConstant.TOKEN_REQUIRED);

      const token = request.headers.authorization.substring(7, request.headers.authorization.length);
      const decoded = <IAuthUser>this.tokenHelper.decode(token);
      if (!decoded) throw new ClientError(messageConstant.INVALID_TOKEN);
      request.user = decoded;
      next();
    } catch (error: any) {
      this.httpResponse.error(response, error);
    }
  }
}

export default Authorization;
