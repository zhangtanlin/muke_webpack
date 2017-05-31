/**
 注意1：使用了webpack.config.js来配置文件，则在cmd中启动webpack则直接使用webpack
 注意2：修改了webpack.config.js文件名则需要在cmd启动中使用
  webpack --config 修改过后的文件名
 来进行webpack的启动
 注意3：一般配置好webpack.config.js后是在cmd中利用webpack命令来启动的；
 但也可以在package.json的script里配置
 "webpack": "webpack --config webpack.config.js"
    后面还可以添加：--progress表示打包的过程
                  --display-modules表示打包的模块
                  --color表示打包出来文件的字是彩色的
 再通过npm run webpack来进行访问
 */

/**
  打包后新生成的文件怎么才能被html文件的链接引用？这时需要在module.exports里面的
  plugins内添加html-webpack-plugin插件
*/
var htmlWebpack = require("html-webpack-plugin");

module.exports = {
  /**
  打包的文件入口【可以是字符串也可以是数组还可以是对象】
  如果是字符串时："./src/script/main.js";会合并成一个文件
  如果是数组时：["./src/script/main.js", "./src/script/a.js"]；会合并成一个文件
  如果是对象时:{"main":"./src/script/main.js","a":"./src/script/a.js","b":"./src/script/b.js"}
    可以合并成不同的文件
  */
  entry: {
    "main": "./src/script/main.js",
    "a": "./src/script/a.js",
    "b": "./src/script/b.js"
  },
  output: {
    /**
    打包后的文件输出【这个地址需要为绝对路径】如果地址为"/test2/dist/js"则打包到当前
    文件下即D盘、E盘之类的。所以path地址应该写为：E:/atom/muke_webpack/test2
    */
    path: "/atom/muke_webpack/test2/dist",
    /**
    打包后的文件名
    注意：当entry里面的内容为对象时，同时又不想合并这些文件时,可以在filename里面设置变
    量，从而一个单独的文件打包成一个单独文件，可以设置[name].js,也可以设置[hash].js,
    甚至可以拼接[name]-[hash].js等灵活写法
    */
    filename: "js/[name]-[hash].js"
  },
  plugins: [
    /**
    注意1：初始化htmlWebpack()再运行npm run webpack可以在打包后的文件中得到一个含有
    路径的index.html
    注意2：上面的方法并不能满足我们的需要，所以还应该在插件中传递参数{template: "index.html"}
    这样之后就把根目录下的index.html的内容替换到打包后的文件里面
    注意3：上面的方法还是不能满足我们对index.html文件的需要【因为index.html文件还是在
    打包之后的文件里面不符合js和html文件分离的目标】。所以需要修改output的path定位到
    dist文件夹和filename前面追加一个js文件夹。
    */
    new htmlWebpack({
      /**
      html-webpack-plugin插件不仅仅可以支持html引入文件路径的修改，还可以修改
      【文件名】                           filename:"index-[hash].html"
      【引入路径放在什么位置(head或者body)】inject:"head"
      */
      template: "index.html",
      inject: "head",
      filename: "index-[hash].html"
    })
  ]
}
