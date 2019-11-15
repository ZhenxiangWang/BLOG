import React, { Fragment } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { GlobalIcon } from "./statics/iconfont/iconfont.js";

function App() {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
      <GlobalIcon />
    </Fragment>
  );
}

export default App;
