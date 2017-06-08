// 利用es6的import语法引入css文件
import "./css/common.css";

import Layer from "./components/layer/layer.js";

const App = function() {
  // 拿到节点
  var template_div1 = document.getElementById("template_div1");

  // 定义一个Layer
  var layer = new Layer();

  /**
   * 把layer里面的templ添加到节点里面去
   写法是：template_div1.innerHTML = layer.templ;
   注意如果需要给templ里面传递参数就在后面添加json格式的代码
   */
  template_div1.innerHTML = layer.templ({
    name: "张小霖",
    arr: ["艺术设计", "平面设计", "UI设计", "前端架构"]
  });
}
new App();
