// 利用es6的import语法引入css文件
import "./css/common.css";


import layer from "./components/layer/layer.js";

const App = function() {
  console.log(layer);
}
new App();
