import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { Link } from "react-router-dom";
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

class Header extends PureComponent {
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      hangleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    //把list转化给普通js数组
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={hangleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle
            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
          >
            Hot Searches
            <SearchInfoSwitch>
              <i
                //ref获取DOM节点
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              Switch
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      logout
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          {login ? (
            <NavItem onClick={logout} className="right">
              Logout
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">Login</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>

            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe62a;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe616;</span> Write
            </Button>
          </Link>

          <Button className="reg">SignUp</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"])
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      //避免多次无意义地发送Ajax
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    hangleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      console.log(originAngle);
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
