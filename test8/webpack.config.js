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
       * 在webpack.github.io里面list of loader下可以找到templating所有支持的模板
       */
      test: /\.html$/,
      loader: "html-loader"
    }, {
      /**
       * 安装ejs模板规则【让.ejs的文件使用ejs-loader规则】
       注意：安装ejs模板规则后可以让文件不用ejs后缀而用模板名
       例如：layer.ejs模块的后缀可以改成layer.templ
       */
      test: /\.ejs$/,
      loader: "ejs-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }, {
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
