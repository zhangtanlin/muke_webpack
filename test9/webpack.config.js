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
      test: /\.html$/,
      loader: "html-loader"
    }, {
      test: /\.ejs$/,
      loader: "ejs-loader"
    }, {
      /**
       * 增加图片处理规则file-loader。
       注意1：正则匹配方式
       注意2：在模板中(layer.ejs)中引入图片需要使用require()路径
       */
      test: /\.(png|jpg|gif|svg)$/,
      loader: "file-loader",
      /**
       * query是
       query.name用以修改图片的存放路径、名字等
       [hash:5]表示只获取hash值得前五位
       */
      query: {
        name: "images/[name]-[hash:5].[ext]"
      }
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
