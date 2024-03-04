export default interface IBaseModel {
  id: number | string;
  uuid?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive?: boolean;
}
