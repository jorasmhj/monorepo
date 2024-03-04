import { LogService } from "../services";
import { httpResponse } from "../helpers";
import { Request, Response } from "express";
import { ILogController } from "../interfaces";

export class LogController implements ILogController {
  private readonly _logService: LogService;
  constructor(logService: LogService) {
    this._logService = logService;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  follow(request: Request, response: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getAll(request: Request, response: Response): Promise<any> {
    try {
      const logs = await this._logService.find(request);
      httpResponse.success(response, logs, "");
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  }
  async getOne(request: Request, response: Response): Promise<any> {
    try {
      const logs = await this._logService.findOne(request);
      httpResponse.success(response, logs, "");
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  }
  async create(request: Request, response: Response): Promise<any> {
    try {
      // const log = this._logDto.toEntity(request.body)
      const result = await this._logService.create(request);
      httpResponse.success(response, result, "");
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  }
  async update(request: Request, response: Response): Promise<any> {
    try {
      const result = await this._logService.update(request);
      httpResponse.success(response, result, "");
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  }
}
