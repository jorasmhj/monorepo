import { httpResponse } from "../helpers";
import { Request, Response } from "express";
import { messageConstant } from "../constants";
import { ActivityLogService } from "../services";
import { IActivityLogController } from "../interfaces";

export class ActivityLogController implements IActivityLogController {
  private readonly _activityLogService: ActivityLogService;
  constructor(activityLogService: ActivityLogService) {
    this._activityLogService = activityLogService;
  }

  checkHealth = async (request: Request, response: Response): Promise<any> => {
    try {
      httpResponse.success(response, {}, messageConstant.API_RUNNING_MESSAGE);
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  };

  getAll = async (request: Request, response: Response): Promise<any> => {
    try {
      const activityLogs = await this._activityLogService.findAll(request);
      httpResponse.success(response, activityLogs, messageConstant.ACTIVITY_LOG_FETCH_SUCCESS);
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  };

  getOne = async (request: Request, response: Response): Promise<any> => {};

  create = async (request: Request, response: Response): Promise<any> => {
    try {
      const result = await this._activityLogService.create(request);
      httpResponse.success(response, result, messageConstant.ACTIVITY_LOG_CREATE_SUCCESS);
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  };

  update = async (request: Request, response: Response): Promise<any> => {};

  delete = async (request: Request, response: Response): Promise<any> => {
    try {
      const result = await this._activityLogService.delete(request);
      httpResponse.success(response, result, messageConstant.ACTIVITY_LOG_DELETE_SUCCESS);
    } catch (error: any) {
      httpResponse.error(response, error);
    }
  };
}
