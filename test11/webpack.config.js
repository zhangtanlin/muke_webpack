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
       * 利用image-webpack-laoder对图片进行压缩
       注意：是先处理image-webpack-loader
            再处理url-laoder?limit=20000&name=images/[name]-[hash:5].[ext]
       */
      loaders: [
        "file-loader?limit=10000&name=images/[name]-[hash:5].[ext]",
        "image-webpack-loader"
      ]
      // loader: "url-loader",
      // query: {
      //   limit: 20000,
      //   name: "images/[name]-[hash:5].[ext]"
      // }



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
