import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import bannerImg from "../../statics/banner.jpg";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";

import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={bannerImg} alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
  }
}

//Home是UI组件，而mapDispatch是容器组件
const mapDispatchToProps = dispatch => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(Home);
