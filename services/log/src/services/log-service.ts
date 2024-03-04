import { LogDto } from "../dtos";
import BaseService from "./base-service";
import { collectionConstant } from "../constants";

export default class LogService extends BaseService<string, any, any, any> {
  private readonly _logDto: LogDto;
  constructor(logDto: LogDto) {
    super();
    this._logDto = logDto;
  }

  async create(logRequest: any): Promise<any> {
    const log = this._logDto.toEntity(logRequest);
    const { _id } = await super.insertOne(collectionConstant.LOG_COLLECTION, log);

    return { _id, ...log };
  }

  async findOne(query: any): Promise<any> {
    query.condition = {};

    return await super.findOne(collectionConstant.LOG_COLLECTION, query);
  }

  async find(query?: any): Promise<any> {
    query.condition = {};
    const project = {};

    return await super.find(collectionConstant.LOG_COLLECTION, query, project);
  }

  async update(query?: any): Promise<any> {
    query.condition = {};

    return await super.update(collectionConstant.LOG_COLLECTION, query);
  }
}
