var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "main": "./src/script/main.js",
    "a": "./src/script/a.js",
    "b": "./src/script/b.js",
    "c": "./src/script/c.js"
  },
  output: {
    path: "/atom/muke_webpack/test3/dist",
    //publicPath: "http://cdn.com",
    filename: "js/[name]-[hash].js"
  },
  /**
  *根据页面的不同添加多个new htmlWebpackPlugin
  chunks:利用chunks可以给不同的html页面添加不同的链接地址[地址的值是数组]
  excludeChunks:表示除了哪些chunks其他的都加载进来
  注意：需要加载公共模块代码到html页面上，需要再chunks里面都添加该模块
  */
  plugins: [
    new htmlWebpackPlugin({
      "filename": "index.html",
      "template": "index.html",
      "inject": false,
      "title": "我是index的title",
      "chunks": ["main"]
    }),
    new htmlWebpackPlugin({
      "filename": "a.html",
      "template": "index.html",
      "inject": false,
      "title": "我是a的title",
      "chunks": ["main", "a"]
    }),
    new htmlWebpackPlugin({
      "filename": "b.html",
      "template": "index.html",
      "inject": false,
      "title": "我是b的title",
      "chunks": ["main", "b"]
    }),
    new htmlWebpackPlugin({
      "filename": "c.html",
      "template": "index.html",
      "inject": false,
      "title": "我是c的title",
      "chunks": ["main", "c"]
    })
  ]
}
