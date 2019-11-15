import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from "./style.js";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className="writting">Write</Button>
          <Button className="reg">SignUp</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;
