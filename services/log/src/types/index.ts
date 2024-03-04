import { IAuthUser } from "../interfaces";
import { Request as ExpressRequest } from "express";

export type AnyObj = {
  [key: string]: any;
};

export type Request = ExpressRequest & {
  user?: IAuthUser;
};
