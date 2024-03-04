import { ILogDto } from "./dtos";
import { AnyObj } from "../types";
import { Service } from "./services";
import IToken from "./helpers/token-interface";
import IError from "./helpers/error-interface";
// import IHash from './helpers/hash-interface';
import { ILogModel, IAuthUser, IBaseModel } from "./models";
// import { IModel } from './models';
import IHttpResponse from "./helpers/http-response-interface";
import { ILogController, IActivityLogController } from "./controllers";

export interface DbQueryOptions extends AnyObj {
  paramType?: string;
  fields?: string[] | string;
  sortBy?: string;
  sortType?: "asc" | "desc";
  limit?: number;
  page?: number;
  defaultIncludes?: boolean;
}

export interface IOptions {
  headers?: any;
  params?: any;
}

export interface ServiceOptions extends IOptions, AnyObj {}

export {
  ILogController,
  IBaseModel,
  IAuthUser,
  Service,
  IHttpResponse,
  IToken,
  IError,
  // IHash,
  ILogModel,
  ILogDto,
  IActivityLogController,
};
