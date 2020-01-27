import { DataSource } from "apollo-datasource";

// test code
const users = [
  {
    token: "a1b2c3",
    email: "user@email.com",
    username: "user",
    password: "123"
  },
  {
    token: "e4f5g6",
    email: "admin@email.com",
    username: "admin",
    password: "456"
  }
];

/**
 * 테스트 Datasource
 */
class TestDatasource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  getName() {
    const name = "jonghyun2";
    return name;
  }

  getUser(token) {
    const user = users.find(user => user.token == token);
    return user;
  }

  getUserFind(username, password) {
    const found = users.find(user => user.username == username && user.password == password);
    return found && found.token;
  }

  getUsers() {
    return users;
  }
}

export default TestDatasource;
