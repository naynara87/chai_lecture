import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import IconDndHandle from "../atoms/icons/IconDndHandle";
import IconHamburgerMenu from "../atoms/icons/IconHamburgerMenu";
import { colorPalette, ModalConfirm, vw } from "chai-ui-v2";
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
`;

const ContentsContainer = styled.div`
  display: flex;
`;

interface ContentCreatorLayoutProps extends ContentCreatorWrapperProps {
  children: React.ReactNode;
  isDraggable?: boolean;
  draggableProvided?: DraggableProvided;
  onDeleteComponent: () => void; // usePage의 deleteContent 함수를 실행하는 래퍼 함수를 전달해야 한다
}
const ContentCreatorLayout = ({
  children,
  align,
  draggableProvided,
  onDeleteComponent,
  isDraggable = true,
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
    onDeleteComponent && onDeleteComponent();
    closeModal();
  };

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
            <IconWrapper
              customCss={hamburgerMenuCss}
              showIcon
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
