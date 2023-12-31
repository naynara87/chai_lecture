import styled from "@emotion/styled";
import { colorPalette, ModalBase, Content, ContentType } from "chai-ui-v2";
import React, { useCallback, useEffect, useState } from "react";
import IconClose from "chai-ui-v2/dist/assets/images/icon/icon_close_black.svg";
import { BtnSelectComponent } from "../../../styles/template";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DroppableContents, {
  DroppableContentsProps,
} from "../DroppableContents";
import ComponentsContextMenuComponent from "../ComponentsContextMenuComponent";
import { css } from "@emotion/react";
import { characterCardContentComponents } from "../../../data/appData";

const BtnSelect = styled(BtnSelectComponent)`
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vmin;
  height: 75vmin;
  padding: 3vmin;
  border-radius: 2vmin;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

const BtnCloseModal = styled.button`
  position: absolute;
  top: -1.5vmin;
  right: -1.5vmin;
`;

const ModalPositionCss = css`
  left: 0;
  top: 38px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: calc(100% - 30px);
  overflow: auto;
  margin-top: 16px;
`;

export interface ModalCharacterCardListProps
  extends Omit<DroppableContentsProps, "droppableId" | "contents"> {
  isModalOpen: boolean;
  closeModal: () => void;
  closeOnBackgroundClick?: boolean;
  contents: Content[] | undefined;
  handleDragEnd: (result: DropResult) => void;
  addComponent: (ContentType: ContentType) => void;
}
const ModalCharacterCardList = ({
  isModalOpen,
  closeModal,
  currentSlide,
  contents,
  position,
  addComponent,
  updateContent,
  deleteContent,
  handleDragEnd,
  closeOnBackgroundClick = true,
}: ModalCharacterCardListProps) => {
  const [isComponentsContextMenuOpen, setIsComponentsContextMenuOpen] =
    useState(false);
  const toggleComponentsContextMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsComponentsContextMenuOpen(!isComponentsContextMenuOpen);
  };
  const closeComponentsContextMenu = useCallback(() => {
    setIsComponentsContextMenuOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("click", closeComponentsContextMenu);
    return () => {
      window.removeEventListener("click", closeComponentsContextMenu);
    };
  }, [closeComponentsContextMenu]);
  return (
    <ModalBase
      open={isModalOpen}
      onClose={closeModal}
      closeOnBackgroundClick={closeOnBackgroundClick}
    >
      <ModalContainer className="base-modal">
        <ButtonContainer>
          <BtnSelect onClick={toggleComponentsContextMenu}>
            컴포넌트 선택
          </BtnSelect>
          <BtnCloseModal className="btn-close-modal" onClick={closeModal}>
            <img src={IconClose} alt="닫기" draggable={false} />
          </BtnCloseModal>
          <ComponentsContextMenuComponent
            isComponentsContextMenuOpen={isComponentsContextMenuOpen}
            toggleContextMenu={toggleComponentsContextMenu}
            addComponent={addComponent}
            customCSS={ModalPositionCss}
            contentComponents={characterCardContentComponents}
          />
        </ButtonContainer>
        <ContentContainer>
          <DragDropContext onDragEnd={handleDragEnd}>
            <DroppableContents
              droppableId={`characterCardModal`}
              currentSlide={currentSlide}
              contents={contents ?? []}
              position={position}
              updateContent={updateContent}
              deleteContent={deleteContent}
              dndOffsetContainerQuery=".base-modal"
            />
          </DragDropContext>
        </ContentContainer>
      </ModalContainer>
    </ModalBase>
  );
};

export default ModalCharacterCardList;
