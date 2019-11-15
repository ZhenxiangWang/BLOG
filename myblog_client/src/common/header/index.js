import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style.js";

const getListArea = show => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          Hot Searches
          <SearchInfoSwitch>Switch</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>JavaScript</SearchInfoItem>
          <SearchInfoItem>HTML</SearchInfoItem>
          <SearchInfoItem>CSS</SearchInfoItem>
          <SearchInfoItem>React</SearchInfoItem>
          <SearchInfoItem>Redux</SearchInfoItem>
          <SearchInfoItem>Movie</SearchInfoItem>
          <SearchInfoItem>Music</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    );
  } else {
    return null;
  }
};
//无状态组件
const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download App</NavItem>
        <NavItem className="right">Login</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>

          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe62a;
          </i>
          {getListArea(props.focused)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe616;</span> Write
        </Button>
        <Button className="reg">SignUp</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"])
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
