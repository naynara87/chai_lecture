import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";
import { Content, ID, ModalConfirm } from "chai-ui-v2";
import { DraggableProvided } from "react-beautiful-dnd";
import { ReturnUsePage } from "../../hooks/usePage";
import { CommonTemplateComponentLocation } from "../../types/page";
import HamburgMenu from "./HamburgMenu";

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
  margin: 1vmin 0;
  width: ${(props) => props.isContainerFullWidth && "100%"};
  width: 100%;
  /* border: 1px solid red; */
`;

interface IconContainerWrapperProps {
  showWrapper: boolean;
}

const IconContainerWrapper = styled.div<IconContainerWrapperProps>`
  display: ${(props) => (props.showWrapper ? "flex" : "none")};
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

const ContentsContainer = styled.div`
  width: 100%;
  font-size: 2vmin;
`;

interface ContentCreatorLayoutProps extends ContentCreatorWrapperProps {
  children: React.ReactNode;
  isDraggable?: boolean;
  isEditBtn?: boolean;
  draggableProvided?: DraggableProvided;
  copyContent?: ReturnUsePage["copyContent"];
  pasteContent?: ReturnUsePage["pasteContent"];
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
  copyContent,
  pasteContent,
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

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  };

  useEffect(() => {
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

  const handleCopyComponent = () => {
    if (!slideId?.toString() || !content || !position) return;
    copyContent && copyContent(content);
  };

  const handlePasteComponent = () => {
    if (!slideId?.toString() || !content || !position) return;
    pasteContent && pasteContent(slideId, content.id, position);
  };

  return (
    <ContentCreatorWrapper align={align}>
      <ContentCreatorContainer
        className={"contentCreator"}
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
                <HamburgMenu
                  closeHamburgerMenu={closeHamburgerMenu}
                  onClickDelete={() => setIsModalOpen(true)}
                  onClickCopy={() => handleCopyComponent()}
                  onClickPaste={() => handlePasteComponent()}
                />
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
