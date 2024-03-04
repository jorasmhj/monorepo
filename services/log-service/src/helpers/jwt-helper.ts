import jwt from "jsonwebtoken";
import { IToken } from "../interfaces";

const secret: string = process.env.JWT_SECRET!;

class JwtToken implements IToken {
  generate(payload: any, expiresIn: number = 86400) {
    return jwt.sign(payload, secret, { expiresIn: expiresIn });
  }

  verify(token: string) {
    try {
      jwt.verify(token, secret);

      return true;
    } catch (error: any) {
      return false;
    }
  }

  decode(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      token = token.replace("Bearer ", "");
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return reject(err);
        }

        return resolve(decoded);
      });
    });
  }
}

export default new JwtToken();
