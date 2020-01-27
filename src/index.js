import {
  ApolloServer,
  AuthenticationError,
  ForbiddenError
} from "apollo-server";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";

// schemas import
import schemaTest from "./graphql/schemas/schema_test";

// resolvers import
import resolverTest from "./graphql/resolvers/resolver_test";

// Datasources import
import TestDatasource from "./datasources/datasource_test";

/**
 * types append
 */
const typeDefs = mergeTypes([schemaTest], { all: true });

/**
 * resolvers append
 */
const resolvers = mergeResolvers([resolverTest], {all: true});

/**
 * datasources
 */
const dataSources = () => ({
  test: new TestDatasource()
});

/**
 * context
 * @param {*} param0
 */
const context = async ({ req }) => {
  // console.log(`request path : ${req.path}`);

  if (!req.headers || !req.headers.authorization)
    return undefined;

  const token = req.headers.authorization.substr(7);
  const user = dataSources().test.getUser(token);

  return { user };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
