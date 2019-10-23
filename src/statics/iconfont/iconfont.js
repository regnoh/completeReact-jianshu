import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1571796220636'); /* IE9 */
  src: url('./iconfont.eot?t=1571796220636#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1571796220636') format('woff'),
  url('./iconfont.ttf?t=1571796220636') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1571796220636#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
