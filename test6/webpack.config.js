var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  /**
   * context定义当前目录
   */
  context: __dirname,
  entry: {
    "main": "./src/app.js"
  },
  output: {
    path: "/atom/muke_webpack/test6/dist",
    filename: "js/[name].bundle.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      /**
       *
       */
      {
        test: /\.less$/,
        loader: "style!css!postcss!less"
      }
    ]
  },
  /**
   * postcss会返回postcss-loader需要插件的列表
   borswers:是定义浏览器的版本【最近的5个版本】
   */
  postcss: [
    require("autoprefixer")({
      borswers: ["last 5 versions"]
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
