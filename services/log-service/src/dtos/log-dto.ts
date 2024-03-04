import { ILogDto, ILogModel } from "../interfaces";

export default class LogDto implements ILogDto {
  toEntity(domain: any): ILogModel {
    const logEntity: ILogModel = {
      businessName: domain.businessName,
    };

    return logEntity;
  }

  toInfo(entity: ILogModel): any {
    const logInfo: any = {
      businessName: entity.businessName,
    };

    return logInfo;
  }

  toInfoList(entities: ILogModel[]): any[] {
    return entities.map(this.toInfo);
  }
}
