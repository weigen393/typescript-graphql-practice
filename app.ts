import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ${url}`);  
});





// const message = 'Hello World';

// function say(something: string): void {
//   console.log(something);
// }

// say(message);
