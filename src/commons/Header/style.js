import styled from "styled-components";
export const HeaderWrapper = styled.div`
  /* 固定头部 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  width: 100%;
  height: 56px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const Logo = styled.a`
  height: 56px;
  margin: 0 120px 0 80px;
  img {
    height: 100%;
  }
`;
export const NavWrapper = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
`;
export const Nav = styled.div`
  height: 56px;
  line-height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &.left {
    width: 500px;
  }
  &.right {
    width: 120px;
  }
`;
export const NavItem = styled.li`
  list-style: none;
  font-weight: 400;
  a {
    font-size: 18px;
    color: #333;
    text-decoration: none;
  }
  &.active {
    color: #ea6f5a;
  }

  &.theme {
    font-size: 24px;
    color: #969696;
  }
  &.diamond {
    font-size: 24px;
    color: #ea6f5a;
    span {
      font-size: 16px;
    }
  }
`;
export const SearchWrapper = styled.form`
  position: relative;
`;
export const SearchInput = styled.input`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  font-size: 14px;
  transition: all 0.2s ease-in;
  &.focused {
    width: 240px;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 5px;
  width: 30px;
  height: 30px;
  color: #969696;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #969696 !important;
  cursor: pointer;
`;
export const SearchTipWrapper = styled.ul`
  list-style: none;
  position: absolute;
  margin-top: 9px;
  padding: 15px;
  width: 250px;
  left: 0;
  top: 100%;
  /* visibility: hidden;
    opacity: 0; */
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchTip = styled.li`
  height: 40px;
  font-size: 14px;
  color: #333;
  position: relative;
  margin-top: 5px;
  a {
    display: flex;
    align-items: center;
    height: 30px;
    span {
      margin-left: 5px;
      padding: 0 5px;
      width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  a:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;
export const ButtonGroup = styled.div`
  margin-left: 80px;
  width: 350px;
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  height: 38px;
  line-height: 24px;
  padding: 6px 12px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;

  &.login {
    border: none;
    background: transparent;
  }
  &.register {
    width: 80px;
    color: #ea6f5a;
    background-color: transparent;
  }
  &.write {
    width: 100px;
    color: #fff;
    background-color: #ea6f5a;
  }
`;
