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
      test: /\.(png|jpg|gif|svg)$/,
      /**
       * 引入url-loader
       作用是：当图片链接文件小于多少KB时会自动把图片转成base格式代码
       注意1：模板里的文件会打包到模板里面，html上引入的会添加到html里面
       注意2：把图片不当做代码加入到http里面，可以享受http请求的缓存优势，可重复调用，
              而把图片转换成代码会导致http请求代码冗余【影响html代码大小】。
       */
      loader: "url-loader",
      query: {
        /**
         * limit：是url-loader来控制图片链接大小的
         注意：单位是kb，即20000KB==19M(即小于19KB的文件都会转成代码)
         */
        limit: 20000,
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
