/**
 注意1：使用了webpack.config.js来配置文件，则在cmd中启动webpack则直接使用webpack
 注意2：修改了webpack.config.js文件名则需要在cmd启动中使用
  webpack --config 修改过后的文件名
 来进行webpack的启动
 */

module.exports = {
  /**
  打包的文件入口【可以是字符串也可以是数组】
  如果是字符串时："./src/script/main.js"
  如果是数组时：[]
  */
  entry: ["./src/script/main.js", "./src/script/a.js"],
  output: {
    /**
    打包后的文件输出【这个地址需要为绝对路径】
    如果地址为"/test2/dist/js"则打包到当前文件下即D盘、E盘之类的。
    所以path地址应该写为：E:/atom/muke_webpack/test2
    */
    path: "/atom/muke_webpack/test2/dist/js",
    //打包后的文件名
    filename: "bundle.js"
  }
}
