import * as dotenv from "dotenv";
dotenv.config();
import users from "../data/user_data.json";
import { createToken, verifyToken } from '../utils/util';
const { TOKEN_KEY, EXPIRED } = process.env;
import bcrypt from "bcrypt";
const SALT_ROUNDS = 2;

interface UserInfo {
  account: String;
  name: String;
  birthday: String;
}

const resolvers = {
  Query: {
    login: async (parent: any, args: any, context: any) => {      
      // console.log(args);
      const user = users.find((user: { account: string; }) => user.account === args.account);
      if (!user) throw new Error("Account Not Exists");
      // console.log(user);      
      const passwordIsValid = await bcrypt.compare(args.password, user.password);
      if (!passwordIsValid) throw new Error("Wrong Password");
      // console.log(createToken(user.account, user.name, user.birthday));      
      return { accessToken: createToken(user.account, user.name, user.birthday), expired: EXPIRED };
    },
    me: async (parent: any, args: any, context: any) => {   
      const { token } = context;
      try{
        if(!token){
          throw new Error("Unauthorized");
        }        
        const decoded: UserInfo = await verifyToken(token, TOKEN_KEY!) as UserInfo;        
        return { account: decoded.account, name: decoded.name, birthday: decoded.birthday };        
      }catch(e){
        console.log(e);        
        return e;
      }
    }    
  }
}

export default resolvers;