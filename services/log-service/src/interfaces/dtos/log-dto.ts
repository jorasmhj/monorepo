export default interface ILogDto {
  toEntity(domain: any): any;
  toInfo(item: any): any;
  toInfoList(itemList: any[]): any[];
}
