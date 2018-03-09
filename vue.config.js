const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './src/main.js'),
      login: path.resolve(__dirname, './src/login.js'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        excludeChunks: [ 'login' ]
      }),
      new HtmlWebpackPlugin({
        filename: 'login.html',
        template: 'public/login.html',
        excludeChunks: [ 'app' ]
      }),
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: [
      path.resolve(__dirname, './dist'),
      path.resolve(__dirname, './data'),
    ],
    // proxy: {
    //   "/api/*": {
    //     target: "https://api.ktube.xyz",
    //     secure: false,
    //     changeOrigin: true
    //   }
    // },
    host: '0.0.0.0',
    port: 8080,
  }
}
