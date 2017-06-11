import "./layer.less";

/**
 * 添加模板
 如果采用了ejs-loader后缀名就是.ejs，如果采用了html-loader后缀名就是.html
 注意：同时也可以是模板名，例如：.templ
 */
import templ from "./layer.ejs";

function layer() {
  return {
    name: "layer",
    templ: templ
  }
}

export default layer;
