/**
 * 采用commonjs规范
 安装css-loader识别.css文件【npm install css-loader -D】
 安装style-loader识别style文件【npm install style-loader -D】
 */
require("./3world");
require("./3style.css");

/**
 * 在命令行工具中执行：webpack 需要打包的文件 打包后的文件
 例如：webpack 3_1hello.js 3_1hello.bundle.js --module-bind "css=style-loader!css-loader" --progress --display-modules --watch
 注意：--prigress表示打包的过程；
 注意：--display-modules表示打包的模块；
 注意：--watch表示监听【改变时修改(监听hello.js)】


注意：--module-bind表示用命令行绑定方法
--watch表示文件更新时自动更新
 结果有：
 1：hash值；2：webpack版本号；3：asset表示打包后的文件；4：size表示打包后的文件大小
 5：chunks表示这次打包的分块；6：chunkname表示这次打包的名称
 */
function hello(atr) {
  console.log(atr);
}
hello("张小霖正在学习webpack!!!");
