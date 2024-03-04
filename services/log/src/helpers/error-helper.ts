import { IError } from "../interfaces";

class ServerError implements IError {
  name = "Server Error";
  constructor(
    public message: string,
    public statusCode: number = 500
  ) {}
}

class ClientError implements IError {
  name = "Client Error";
  constructor(
    public message: string,
    public statusCode: number = 400
  ) {}
}

export { ServerError, ClientError };
