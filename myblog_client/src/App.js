import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { GlobalIcon } from "./statics/iconfont/iconfont.js";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <GlobalStyle />
        <GlobalIcon />
      </Provider>
    );
  }
}

export default App;
