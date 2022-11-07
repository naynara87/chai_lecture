import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";

const FooterContainer = styled.footer`
  background-color: ${colorPalette.deepBlue};
  color: ${colorPalette.white};
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        {/* TODO: corner 완료 여부 */}
        <span>v</span>
        <span>v</span>
        <span>v</span>
        <span>v</span>
        <span>v</span>
        <span>v</span>
        <span>v</span>
      </div>
      <div>{"다음 >"}</div>
    </FooterContainer>
  );
};

export default Footer;
