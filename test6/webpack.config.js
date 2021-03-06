var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/app.js",
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
       * 利用postcss-loader里面的autoprefixer方法给css添加兼容性前缀
       注意1：node.js处理方式是先处理后面的所以postcss-loader要排在后面
       注意2：loader: "style-loader!css-loader!postcss-loader"
            也可以写成loaders: ["style-loader","css-loader","postcss-loader"]
       */
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }]
  },
  /**
   * postcss会返回一个postcss-loader的依赖插件
   */
  postcss: [
    require("autoprefixer")({
      /**
       * 添加autoprefixer的参数
       broswers:["last 5 versions"]表示浏览器最近的5个版本
       */
      broswers: ["last 5 versions"]
    })
  ],
  plugins: [
    new htmlWebpackPlugin({
      "filename": "index.html",
      "template": "index.html",
      "inject": "body",
    })
  ]
}
