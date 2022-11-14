import {gql} from "apollo-server";

const typeDefs = gql`
  type User {
    account: String
    password: String
    name: String
    birthday: String
  }
  type Login {
    accessToken: String
    expired: String
  }
  type Query {
    me: [User]
    login (account: String!, password: String!): Login
  }
`

export default typeDefs;