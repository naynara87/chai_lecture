import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";
import { vw } from "chai-ui-v2";
import { DraggableProvided } from "react-beautiful-dnd";

const ContentCreatorWrapper = styled.div`
  display: flex;
  margin-bottom: ${vw(24)};
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
    <ContentCreatorWrapper className="contentCreator">
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
      <ContentsContainer align={align}>{children}</ContentsContainer>
    </ContentCreatorWrapper>
  );
};

export default ContentCreatorLayout;
