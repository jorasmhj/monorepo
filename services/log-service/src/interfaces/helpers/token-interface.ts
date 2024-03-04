import { AnyObj } from "../../types";

export default interface IToken {
  generate(payload: string | AnyObj, expiresIn?: number): string;
  verify(token: string): boolean;
  decode(token: string): AnyObj | string | null;
}
