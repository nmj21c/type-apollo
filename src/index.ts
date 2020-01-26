import { ApolloServer, gql } from "apollo-server";
import * as path from "path";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "./graphql/schemas/**/*.js"));
const allResolvers = fileLoader(path.join(__dirname, "./graphql/resolvers/**/*.js"));

const server = new ApolloServer({
    typeDefs: mergeTypes(allTypes), 
    resolvers: mergeResolvers(allResolvers)
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})
