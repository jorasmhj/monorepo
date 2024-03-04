import axios from "axios";
import HttpStatus from "http-status-codes";
import { commonConstant } from "../constants";
import { httpResponse, jwtHelper } from "../helpers";
import { NextFunction, Request, Response } from "express";

//#region validate that the api request is sent from authentic source
const authorizeToken = async (req: Request, res: Response, next: NextFunction) => {
  // let clientCode = req.headers[commonConstant.HEADER_CLIENT_CODE];
  const unauthorizedObj = {
    statusCode: HttpStatus.UNAUTHORIZED,
    message: commonConstant.MESSAGE_UNAUTHORIZED,
  };
  try {
    let code: any = {},
      token = "";
    if (req.headers[commonConstant.HEADER_AUTHORIZATION]) {
      token = (req.headers[commonConstant.HEADER_AUTHORIZATION] || "") as string;
      code = await jwtHelper.decode(token);
    }
    if (code && code.userId) {
      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
      }
      axios.defaults.headers.common["requestapp"] = commonConstant.REQUEST_APP;
      next();
    } else httpResponse.unAuthorized(res, unauthorizedObj);
  } catch (err) {
    httpResponse.unAuthorized(res, unauthorizedObj);
  }
};
//#endregion

const getTokenInfo = async (req: Request) => {
  const token = req.headers["authorization"] || "";
  const decodedToken = await jwtHelper.decode(token);

  return decodedToken;
};

export { authorizeToken, getTokenInfo };
