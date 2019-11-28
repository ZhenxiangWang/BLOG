import { fromJS } from "immutable";
import * as constants from "./constants.js";

const defaultState = fromJS({
  title: "值得得收藏的8个web端库",
  content:
    '<img src="https://upload-images.jianshu.io/upload_images/10475890-ed6d6ca1a806dfc2.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/850/format/webp"></img><p><b>1. Ant Design</b></p><p>介绍：一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。</p><p>组件库地址：https://ant.design/index-cn</p><p>组件库来源：蚂蚁金服体验技术部</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
