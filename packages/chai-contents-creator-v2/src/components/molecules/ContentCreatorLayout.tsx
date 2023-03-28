import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";
import { colorPalette, Content, ID, ModalConfirm, vw } from "chai-ui-v2";
import { DraggableProvided } from "react-beautiful-dnd";
import { ReturnUsePage } from "../../hooks/usePage";
import { CommonTemplateComponentLocation } from "../../types/page";

interface ContentCreatorWrapperProps {
  align?: "center" | "start";
}
const ContentCreatorWrapper = styled.div<ContentCreatorWrapperProps>`
  display: flex;
  justify-content: ${({ align }) => align || "start"};
`;

interface ContentCreatorContainerProps {
  isContainerFullWidth: boolean;
}

const ContentCreatorContainer = styled.div<ContentCreatorContainerProps>`
  display: inline-flex;
  margin-bottom: ${vw(24)};
  width: ${(props) => props.isContainerFullWidth && "100%"};
`;

interface IconContainerWrapperProps {
  showWrapper: boolean;
}

const IconContainerWrapper = styled.div<IconContainerWrapperProps>`
  display: ${(props) => (props.showWrapper ? "flex" : "none")};
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
  position: relative;
  ${({ customCss }) => customCss}
  :not(:last-child) {
    margin-right: 2px;
  }
`;

const HamburgMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(105%, 0);
  cursor: auto;
  background-color: ${colorPalette.white};
  border-radius: 8px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  padding: 8px;
  z-index: 20;
`;

const HamburgMenuItem = styled.li`
  padding: 4px;
  cursor: pointer;
  font-size: 12px;
  line-height: 17px;
  color: ${colorPalette.gray900};
  font-weight: 500;
  :hover {
    opacity: 0.8;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
`;

interface ContentCreatorLayoutProps extends ContentCreatorWrapperProps {
  children: React.ReactNode;
  isDraggable?: boolean;
  isEditBtn?: boolean;
  draggableProvided?: DraggableProvided;
  deleteContent?: ReturnUsePage["deleteContent"]; // FIXME: 나중에 모든 컴포넌트 구현 후 옵셔널 제거
  slideId?: ID; // FIXME: 나중에 모든 컴포넌트 구현 후 옵셔널 제거
  content?: Content; // FIXME: 나중에 모든 컴포넌트 구현 후 옵셔널 제거
  position?: CommonTemplateComponentLocation; // FIXME: 나중에 모든 컴포넌트 구현 후 옵셔널 제거
  isContainerFullWidth?: boolean;
}
const ContentCreatorLayout = ({
  children,
  align,
  draggableProvided,
  deleteContent,
  slideId,
  content,
  position,
  isDraggable = true,
  isEditBtn = true,
  isContainerFullWidth = false,
}: ContentCreatorLayoutProps) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const toggleHamburgerMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  useEffect(() => {
    const closeHamburgerMenu = () => {
      setIsHamburgerMenuOpen(false);
    };
    window.addEventListener("click", closeHamburgerMenu);
    return () => {
      window.removeEventListener("click", closeHamburgerMenu);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteComponent = () => {
    if (!slideId?.toString() || !content || !position) return;
    deleteContent && deleteContent(slideId, content.id, position);
    closeModal();
  };

  return (
    <ContentCreatorWrapper align={align}>
      <ContentCreatorContainer
        className="contentCreator"
        isContainerFullWidth={isContainerFullWidth}
      >
        <IconContainerWrapper showWrapper={isDraggable && isEditBtn}>
          <IconContainer>
            <IconWrapper
              customCss={dndHandleCss}
              showIcon={isDraggable}
              {...draggableProvided?.dragHandleProps}
            >
              <IconDndHandle />
            </IconWrapper>
            <IconWrapper
              customCss={hamburgerMenuCss}
              showIcon={isEditBtn}
              onClick={toggleHamburgerMenu}
            >
              <IconHamburgerMenu />
              {isHamburgerMenuOpen && (
                <HamburgMenu>
                  <HamburgMenuItem onClick={() => setIsModalOpen(true)}>
                    삭제
                  </HamburgMenuItem>
                  <HamburgMenuItem>복사</HamburgMenuItem>
                  <HamburgMenuItem>붙여넣기</HamburgMenuItem>
                </HamburgMenu>
              )}
            </IconWrapper>
          </IconContainer>
        </IconContainerWrapper>
        <ContentsContainer>{children}</ContentsContainer>
      </ContentCreatorContainer>
      <ModalConfirm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={"컴포넌트를\n삭제하시겠습니까?"}
        description={
          "삭제 클릭 시 작업 중인 콘텐츠는 삭제되며,\n복원이 불가능합니다."
        }
        leftButtonText={"취소"}
        rightButtonText={"삭제"}
        handleClickLeftButton={closeModal}
        handleClickRightButton={handleDeleteComponent}
      />
    </ContentCreatorWrapper>
  );
};

export default ContentCreatorLayout;
