import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";

const ContentCreatorWrapper = styled.div`
  display: inline-flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px;
`;

interface IconWrapperProps {
  customCss?: SerializedStyles;
}

const dndHandleCss = css`
  cursor: move;
`;

const hamburgerMenuCss = css`
  cursor: pointer;
`;

const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  align-items: center;
  ${({ customCss }) => customCss}
  :not(:last-child) {
    margin-right: 2px;
  }
`;

const ContentsContainer = styled.div``;

interface ContentCreatorProps {
  children: React.ReactNode;
}
const ContentCreatorLayout = ({ children }: ContentCreatorProps) => {
  return (
    <ContentCreatorWrapper>
      <IconContainer>
        <IconWrapper customCss={dndHandleCss}>
          <IconDndHandle />
        </IconWrapper>
        <IconWrapper customCss={hamburgerMenuCss}>
          <IconHamburgerMenu />
        </IconWrapper>
      </IconContainer>
      <ContentsContainer>{children}</ContentsContainer>
    </ContentCreatorWrapper>
  );
};

export default ContentCreatorLayout;
