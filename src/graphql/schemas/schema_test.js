import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    username: String!
    email: String!
  }

  type Query {
    sayHello(name: String): String
    name: String
    authenticate(username: String, password: String): String
    me: User
    users: [User]
  }
`;

export default typeDefs;
