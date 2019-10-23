import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  NavWrapper,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  ButtonGroup,
  Button,
  SearchTipWrapper,
  SearchTip
} from "./style";
const logo =
  "http://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png";
export default class Header extends Component {
  state = {
    focused: false,
    mouseIn: false
  };
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/">
          <img alt="" src={logo} />
        </Logo>

        <NavWrapper>
          <Nav className="left">
            <NavItem>
              <a href="/">首页</a>
            </NavItem>
            <NavItem>
              <a href="#">
                <i className="iconfont">&#xe623;</i> 下载App
              </a>
            </NavItem>
            <NavItem>
              <SearchWrapper action="/search">
                <SearchInput
                  placeholder="搜索"
                  className={this.state.focused && "focused"}
                  onFocus={() => {
                    this.setState({ focused: true });
                    this.iconRef.style =
                      "background: #969696; color: #fff!important";
                  }}
                  onBlur={() => {
                    this.iconRef.style = "background: transparent;";
                    this.setState({ focused: false });
                  }}
                />
                <SearchIcon
                  ref={icon => {
                    this.iconRef = icon;
                  }}
                >
                  <i className="iconfont">&#xe61d;</i>
                </SearchIcon>
                {(this.state.focused || this.state.mouseIn) && (
                  <div
                    onMouseEnter={() => {
                      this.setState({ mouseIn: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ mouseIn: false });
                    }}
                  >
                    <SearchTipWrapper>
                      <SearchTip>
                        <a href="/">
                          <i className="iconfont">&#xe61d;</i>
                          <span>历史</span>
                          <i className="iconfont">&#xe61d;</i>
                        </a>
                      </SearchTip>
                      <SearchTip>
                        <a href="/">
                          <i className="iconfont">&#xe61d;</i>
                          <span>物理</span>
                          <i className="iconfont">&#xe61d;</i>
                        </a>
                      </SearchTip>
                    </SearchTipWrapper>
                  </div>
                )}
              </SearchWrapper>
            </NavItem>
          </Nav>
          <Nav className="right">
            <NavItem className="iconfont theme">&#xe636;</NavItem>
            <NavItem className="iconfont diamond">
              &#xe619;<span>beta</span>
            </NavItem>
          </Nav>
        </NavWrapper>
        <ButtonGroup>
          <Button className="login">登录</Button>
          <Button className="register">注册</Button>
          <Button className="write">
            <i className="iconfont">&#xe624;</i> 写文章
          </Button>
        </ButtonGroup>
      </HeaderWrapper>
    );
  }
}
