var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "main": "./src/app.js"
  },
  output: {
    path: "/atom/muke_webpack/test4/dist",
    filename: "js/[name].bundle.js"
  },
  /**
   * 访问babel官网：babeljs.io
   */
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      query: {
        presets: []
      }
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      "filename": "index.html",
      "template": "index.html",
      "inject": "body",
    })
  ]
}
