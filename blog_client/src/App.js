import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { GlobalIcon } from "./statics/iconfont/iconfont.js";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail";

//PureComponent和Component的区别是，前者自己实现了一个shouldComponentUpdate方法，不需要我们手写这个方法来做性能优化，只在必要的时候render
//PureComponent必须与immutable.js结合使用，如果没有使用immutable.js来存储数据，使用PureComponent可能会遇到坑，偏底层的坑
class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <GlobalStyle />
        <GlobalIcon />
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
