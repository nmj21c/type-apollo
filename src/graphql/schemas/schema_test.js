import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        sayHello(name: String): String,
        name: String,
    }
`;

export default typeDefs;