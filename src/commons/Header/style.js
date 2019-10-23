import styled from "styled-components";
export const HeaderWrapper = styled.div`
  /* 固定头部 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  min-width: 768px;
  max-width: 1440px;
  /* 垂直居中 */
  /* margin: 0 auto; */
  height: 56px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
`;
export const Logo = styled.a`
  height: 56px;
  img {
    height: 100%;
  }
`;
export const Nav = styled.div`
  height: 56px;
  line-height: 56px;
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  a {
    color: #333;
    text-decoration: none;
  }
  &.active {
    a {
      color: #ea6f5a;
    }
  }
`;
export const SearchWrapper = styled.form`
  /* width: 150px; */
  position: relative;
`;
export const SearchInput = styled.input`
  width: 240px;
  height: 38px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  font-size: 14px;
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 5px;
  width: 30px;
  height: 30px;
  color: #969696;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
`;
