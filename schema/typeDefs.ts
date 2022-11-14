import {gql} from "apollo-server";

const typeDefs = gql`
  type User {
    account: String
    password: String
    name: String
    birthday: String
  }
  type UserInfo {
    account: String
    name: String
    birthday: String  
  }
  type Login {
    accessToken: String
    expired: String
  }
  type Query {
    login (account: String!, password: String!): Login
    me: UserInfo    
  }
`

export default typeDefs;