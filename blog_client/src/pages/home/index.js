import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import bannerImg from "../../statics/banner.jpg";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { BackTop } from "./style";

import { connect } from "react-redux";
//PureComponent和Component的区别是，前者自己实现了一个shouldComponentUpdate方法，不需要我们手写这个方法来做性能优化，只在必要的时候render
class Home extends PureComponent {
  shouldComponentUpdate() {}
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

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
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>Top</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const MapStateToProps = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
//Home是UI组件，而mapDispatch是容器组件
const mapDispatchToProps = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  };
};

export default connect(MapStateToProps, mapDispatchToProps)(Home);
