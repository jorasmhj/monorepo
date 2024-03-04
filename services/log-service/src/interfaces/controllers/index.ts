import { Request, Response } from "express";
export interface IController {
  getAll(request: Request, response: Response): Promise<any>;
  getOne(request: Request, response: Response): Promise<any>;
  create(request: Request, response: Response): Promise<any>;
  update(request: Request, response: Response): Promise<any>;
}
import ILogController from "./log-controller";
import IActivityLogController from "./activity-log-controller";

export { ILogController, IActivityLogController };
