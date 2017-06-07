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
    path: "/atom/muke_webpack/test5/dist",
    filename: "js/[name].bundle.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },
      /**
       * 配置css文件的处理
       test:表示匹配的条件【处理.css的文件】
       loader：定义处理css文件的规则
       安装postcss-loader和处理添加前缀的autoprefixer插件
       注意1：node.js中数组的处理方式是从右到左，所以是先处理数组靠后的值。
       注意2：loader: "style-loader!css-loader!postcss-loader"
            也可以写成loaders:["style-loader","css-loader","postcss-loader"]
       */
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  /**
   * postcss会返回postcss-loader需要插件的列表
   borswers:是定义浏览器的版本【最近的5个版本】
   */
  postcss: function() {
    return ["autoprefixer"]
  },
  plugins: [
    new htmlWebpackPlugin({
      "filename": "index.html",
      "template": "index.html",
      "inject": "body",
    })
  ]
}
