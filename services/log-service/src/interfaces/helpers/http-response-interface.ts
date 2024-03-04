import { Response } from "express";

export default interface IHttpResponse {
  success(response: Response, data: any, message: string): Response<{ data: any; success?: boolean }>;
  error(response: Response, error: any): Response<{ error: any; success?: boolean }>;
}
