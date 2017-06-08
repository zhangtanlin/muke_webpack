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
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }, {
      /**
       * 处理less的less-loader方法
       注意：postcss-loader和less-loader处理的先后顺序，可以参考postcss-loader官网说明：
            less-loader处理完之后才执行postcss-loader再执行css-loader
       */
      test: /\.less$/,
      loader: "style-loader!css-loader!postcss-loader!less-loader"
    }]
  },
  postcss: [
    require("autoprefixer")({
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
