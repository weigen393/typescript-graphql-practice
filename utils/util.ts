import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
const { TOKEN_KEY, EXPIRED } = process.env;

export function createToken(account: string, name: string, birthday: string): string {
  return jwt.sign({ account, name, birthday }, TOKEN_KEY!, { expiresIn: EXPIRED });
};

export async function verifyToken(token: string, secret: string){
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error: unknown, decoded:any) => {
      // console.log(decoded);      
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(decoded);   
    });
  })
}