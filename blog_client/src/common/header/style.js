import styled from "styled-components";
import logoPic from "../../statics/logo2.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({ href: "/" })`
  position: absolute;
  top: 0;
  left: 10px;
  display: block;
  width: 112px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 1080px;
  height: 100%;
  padding-right: 90px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({ placeholder: "Search" })`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 10px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }

  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  cursor: pointer;
  float: right;
  margin-top: 10px;
  margin-right: 25px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 16px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 58px;
  width: 200px;
  padding: 0 20px 5px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 15px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 14px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 3px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
