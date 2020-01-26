const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    /**
     * webpack4 의 신기능
     * development, production
     * production 이면 배포용 최적화가 자동 진행
     */
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    /**
     * 파일을 컴파일 환경 지정
     * express 는 node 이므로 node 설정, Frontend 의 경우 web 설정
     */
    target: 'node',

    node: false,

    entry: {
        server: './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          },
        ]
    },

    /**
     * webpack 가 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
     */
    resolve: {
        extensions: ['.js', 'jsx'],
    },

    /**
     * webpack에서 제외할 것들 정의
     * 번들링 시점에 번들파일에 해당 것들이 포함되지 않도록 하며, libraryTarget 옵션에 설정된 모듈 포르 방식으로 변환
     */
    externals: [nodeExternals(),],

    /**
     * moduleIds : 'hsahed' : 캐시 사용으로 빠르게 처리
     */
    optimization: {
        moduleIds: 'hashed'
    },

    plugins: [
        new CleanWebpackPlugin()
    ],
}