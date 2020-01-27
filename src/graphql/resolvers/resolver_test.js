import { AuthenticationError } from "apollo-server";

const resolvers = {
  Query: {
    sayHello: (_, { name }) => `Hello ${name || "world"}`,
    name: (_, __, { dataSources }) => dataSources.test.getName(),
    authenticate: (_, {username, password}, {dataSources}) => dataSources.test.getUserFind(username, password),
    me: (_, __, {user}) => {
      if(!user) throw new AuthenticationError('로그인 필요');
      return user;
    },
    users: (_, __, {dataSources, user}) => {
      if(!user) throw new AuthenticationError('로그인 필요');
      if(user.username != 'admin') throw new AuthenticationError('권한이 없음');

      return dataSources.test.getUsers();
    }
  }
};

export default resolvers;
