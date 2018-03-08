const path = require('path')

module.exports = {
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
