var htmlWebpackPlugin = require("html-webpack-plugin");
/**
 * 注意：只要引入了node的path模块，就可以在当前文件夹下写绝对路径了
 */
var path = require("path");

module.exports = {
  /**
   *context:表示工作目录？【个人理解是】
   注意：不能使用“./”【会报错】；只能使用“__dirname”来指示当前工作目录
   */
  context: __dirname,
  entry: {
    "main": "./src/app.js"
  },
  output: {
    path: "./dist",
    filename: "js/[name].bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: path.resolve(__dirname, "node_modules"),
      include: path.resolve("./src/")
    }, {
      /**
       * 处理css文件
       test:处理名字
       loader：处理方式
       */
      test: /\.css$/,
      loader: "style-loader!css-loader"

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
