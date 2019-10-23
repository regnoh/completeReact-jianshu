import React, { Component } from "react";
import { Header } from "./commons";
import GlobalStyle from "./statics/iconfont/iconfont";

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}
