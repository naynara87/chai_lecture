import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";

const ContentCreatorWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
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

interface ContentsContainerProps {
  align?: "center" | "start";
}
const ContentsContainer = styled.div<ContentsContainerProps>`
  display: flex;
  flex-grow: 1;
  justify-content: ${({ align }) => align || "start"};
`;

interface ContentCreatorProps extends ContentsContainerProps {
  children: React.ReactNode;
}
const ContentCreatorLayout = ({ children, align }: ContentCreatorProps) => {
  return (
    <ContentCreatorWrapper className="contentCreator">
      <IconContainer>
        <IconWrapper customCss={dndHandleCss}>
          <IconDndHandle />
        </IconWrapper>
        <IconWrapper customCss={hamburgerMenuCss}>
          <IconHamburgerMenu />
        </IconWrapper>
      </IconContainer>
      <ContentsContainer align={align}>{children}</ContentsContainer>
    </ContentCreatorWrapper>
  );
};

export default ContentCreatorLayout;
