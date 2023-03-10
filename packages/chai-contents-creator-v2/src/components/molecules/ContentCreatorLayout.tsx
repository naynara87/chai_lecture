import styled from "@emotion/styled";
import React from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";
import { vw } from "chai-ui-v2";

const ContentCreatorWrapper = styled.div`
  display: flex;
  margin-bottom: ${vw(24)};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px;
  height: fit-content;
`;

const ContentsContainer = styled.div`
  flex: auto;
`;

interface ContentCreatorProps {
  children: React.ReactNode;
}
const ContentCreatorLayout = ({ children }: ContentCreatorProps) => {
  return (
    <ContentCreatorWrapper>
      <IconContainer>
        <IconDndHandle />
        <IconHamburgerMenu />
      </IconContainer>
      <ContentsContainer>{children}</ContentsContainer>
    </ContentCreatorWrapper>
  );
};

export default ContentCreatorLayout;
