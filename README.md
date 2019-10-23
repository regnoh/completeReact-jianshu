"# completeReact-jianshu"

### 1. styled-components

```
tyarn add styled-components
```

### 2. [iconfont](https://www.iconfont.cn/)

1. 下载 icons 到本地

- 添加 icons 到购物车
- 添加到项目(新建)
- 下载到本地
- 解压，复制粘贴 iconfont.css...文件到 src/statics/iconfont 下

2. 全局引入 icons-[createGlobalStyle](https://www.styled-components.com/docs/api#createglobalstyle)

- 修改 iconfont.css

```js
1. 重命名为： iconfont.js
2. @font-face的{ url("iconfont 改为相对路径 url("./iconfont
3. 删除.icon-...图标说明
4. import { createGlobalStyle } from "styled-components";
    export default createGlobalStyle``
```

- src/App.js

```js
import GlobalStyle from "./statics/iconfont/iconfont";
<div>
  <GlobalStyle />
  <Header />
</div>;
```

3. ./commons/Header.js 展示 icon

- <i className="iconfont">&#xe61d;</i>
