import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";

const HeaderContainer = styled.header`
  background-color: ${colorPalette.deepBlue};
  color: ${colorPalette.white};
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>{"빨강 > Lesson1"}</div>
      <button type="button">x</button>
    </HeaderContainer>
  );
};

export default Header;
