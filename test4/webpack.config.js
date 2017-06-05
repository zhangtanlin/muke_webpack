var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "main": "./src/app.js"
  },
  output: {
    path: "/atom/muke_webpack/test4/dist",
    filename: "js/[name].bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      "filename": "index.html",
      "template": "index.html",
      "inject": "body",
    })
  ]
}
