import { ApolloServer, gql } from "apollo-server";
import * as path from "path";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";

import schemaTest from "./graphql/schemas/schema_test";

import resoverTest from "./graphql/resolvers/resolver_test";

const allTypes = [schemaTest];
const allResolvers = [resoverTest];

const server = new ApolloServer({
    typeDefs: mergeTypes(allTypes), 
    resolvers: mergeResolvers(allResolvers)
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})
