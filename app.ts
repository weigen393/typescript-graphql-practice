import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let token: String | undefined = req.headers.authorization;
    return { token };    
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ${url}`);  
});

// import bcrypt from "bcrypt";
// const SALT_ROUNDS = 2;
// async function hash(text: string): Promise<void> {  
//   console.log(await bcrypt.hash(text, SALT_ROUNDS));
// }
// hash("password");

