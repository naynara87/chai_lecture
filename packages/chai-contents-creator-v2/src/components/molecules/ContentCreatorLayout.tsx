import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";
import { vw } from "chai-ui-v2";
import { DraggableProvided } from "react-beautiful-dnd";

interface ContentCreatorWrapperProps {
  align?: "center" | "start";
}
const ContentCreatorWrapper = styled.div<ContentCreatorWrapperProps>`
  display: flex;
  justify-content: center;
  justify-content: ${({ align }) => align || "start"};
`;

const ContentCreatorContainer = styled.div`
  display: inline-flex;
  margin-bottom: ${vw(24)};
`;

const IconContainerWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px;
  height: 24px;
`;

const dndHandleCss = css`
  cursor: move;
`;

const hamburgerMenuCss = css`
  cursor: pointer;
`;

interface IconWrapperProps {
  customCss?: SerializedStyles;
  showIcon: boolean;
}
const IconWrapper = styled.span<IconWrapperProps>`
  display: ${({ showIcon }) => (showIcon ? "flex" : "none")};
  align-items: center;
  ${({ customCss }) => customCss}
  :not(:last-child) {
    margin-right: 2px;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
`;

interface ContentCreatorProps extends ContentCreatorWrapperProps {
  children: React.ReactNode;
  isDraggable?: boolean;
  draggableProvided?: DraggableProvided;
}
const ContentCreatorLayout = ({
  children,
  align,
  draggableProvided,
  isDraggable = true,
}: ContentCreatorProps) => {
  return (
    <ContentCreatorWrapper align={align}>
      <ContentCreatorContainer className="contentCreator">
        <IconContainerWrapper>
          <IconContainer>
            <IconWrapper
              customCss={dndHandleCss}
              showIcon={isDraggable}
              {...draggableProvided?.dragHandleProps}
            >
              <IconDndHandle />
            </IconWrapper>
            <IconWrapper customCss={hamburgerMenuCss} showIcon>
              <IconHamburgerMenu />
            </IconWrapper>
          </IconContainer>
        </IconContainerWrapper>
        <ContentsContainer>{children}</ContentsContainer>
      </ContentCreatorContainer>
    </ContentCreatorWrapper>
  );
};

export default ContentCreatorLayout;
