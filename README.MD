# Apollo Typescript

## Dependencies
```
dependencies {
    apollo-server               // graphql server
    graphql                     //grpahql
    merge-graphql-schemas       // graphql typesDef, resolvers load and merge
}
devDependencies {
    @babel/core
    @babel/node
    @babel/preset-env
    babel-loader
    clean-webpack-plugin
    concurrently
    nodemon
    webpack
    webpack-cli": 
    webpack-node-externals":
}
```

## Error
- GRAPHQL_VALIDATION_FAILED : query 의 문법이 틀림

## Playground
- schema polling : 일정 주기로 schema 를 자동 호출한다. setting 의 아래 옵션을 사용
```
  "schema.polling.enable": true,    // polling 사용 여부 default : true
  "schema.polling.endpointFilter": "*localhost*",
  "schema.polling.interval": 2000,  // polling interval default : 2초 (2000)
```

## trouble shooting
- Class constructor DataSource cannot be invoked without 'new' using Babel
```
    .babelrc 에 targets: node: current 를 추가해 준다.
    {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {"node": "current"}
                }
            ]
        ]
    }
```