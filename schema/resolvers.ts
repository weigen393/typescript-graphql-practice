import * as dotenv from "dotenv";
dotenv.config();
import users from "../data/user_data.json";
import jwt from "jsonwebtoken";
const { TOKEN_KEY, EXPIRED } = process.env;
import bcrypt from "bcrypt";
const SALT_ROUNDS = 2;

function createToken(account: String, name: String, birthday: String): String {
  return jwt.sign({ account, name, birthday }, TOKEN_KEY!, { expiresIn: EXPIRED });
};

const resolvers = {
  Query: {
    login: async (parent: any, args: any, context: any) => {      
      console.log(args);      
      
      const user = users.find((user: { account: String; }) => user.account === args.account);
      if (!user) throw new Error('Account Not Exists');
      console.log(user);
      
      const passwordIsValid = await bcrypt.compare(args.password, user.password);
      if (!passwordIsValid) throw new Error('Wrong Password');
      console.log(createToken(user.account, user.name, user.birthday));
      
      return { accessToken: createToken(user.account, user.name, user.birthday), expired: EXPIRED };
    },
    me: () => {

      return users;
    }    
  }
}

export default resolvers;