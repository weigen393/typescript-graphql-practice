import {gql} from "apollo-server";

const typeDefs = gql`
  type User {
    account: String!
    password: String!
    name: String!
    birthday: String!
  }
  type Query {
    me: [User]  
  }
`

export default typeDefs;