import { IController } from ".";
import { Request, Response } from "express";

export default interface ILogController extends IController {
  follow(request: Request, response: Response): Promise<any>;
}
