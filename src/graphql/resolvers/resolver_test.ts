const resolvers = {
    Query: {
        sayHello: (_, {name}) => `Hello ${name || 'world'}`,
        name: () => 'Jonghyun'
    }
}

export default resolvers;