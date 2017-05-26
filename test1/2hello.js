/**
 * 采用commonjs规范
 */
require("./2world");

/**
 * 在命令行工具中执行：webpack 需要打包的文件 打包后的文件
 例如：webpack hello.js hello.bundle.js
 结果有：
 1：hash值；2：webpack版本号；3：asset表示打包后的文件；4：size表示打包后的文件大小
 5：chunks表示这次打包的分块；6：chunkname表示这次打包的名称
 */
function hello(atr) {
  console.log("hello " + atr);
}
