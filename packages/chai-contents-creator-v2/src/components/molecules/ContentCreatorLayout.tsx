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

const ContentsContainer = styled.div``;

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
