import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  SearchIcon
} from "./style";
const logo =
  "http://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png";
export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/">
          <img alt="" src={logo} />
        </Logo>

        <Nav>
          <NavItem>
            <a href="/">首页</a>
          </NavItem>
          <NavItem>
            <a href="#">下载App</a>
          </NavItem>
          <NavItem>
            <SearchWrapper action="/search">
              <SearchInput placeholder="搜索" />
              <SearchIcon>0</SearchIcon>
            </SearchWrapper>
          </NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}
