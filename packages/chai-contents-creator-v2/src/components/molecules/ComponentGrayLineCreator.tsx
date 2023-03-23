import styled from "@emotion/styled";
import { AllTemplateData, Content, ContentType, ID } from "chai-ui-v2";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import useComponentContext from "../../hooks/useComponentContext";
import { CommonTemplateComponentLocation } from "../../types/page";
import DroppableContents from "./DroppableContents";

const TopArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  position: relative;
  & .btn-text {
    width: 90px;
    height: 35px;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 500;
    white-space: nowrap;
    margin-bottom: unset;
  }
`;

interface ComponentGrayLineProps {
  contents: Content[];
  handleOnDragEnd: (result: DropResult) => void;
  addComponent: (contentType: ContentType) => void;
  currentSlide: AllTemplateData;
  position: CommonTemplateComponentLocation;
  updateComponent: (
    slideId: ID,
    contentId: ID,
    position: CommonTemplateComponentLocation,
    updatedContent: Content,
  ) => void;
  deleteComponent: (
    slideId: ID,
    contentId: ID,
    position: CommonTemplateComponentLocation,
  ) => void;
}

const ComponentGrayLineCreator = ({
  contents,
  handleOnDragEnd,
  addComponent,
  currentSlide,
  position,
  updateComponent,
  deleteComponent,
}: ComponentGrayLineProps) => {
  const {
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  return (
    <div className="gray-line">
      <TopArea>
        <button className="btn-comp-select" onClick={toggleContextMenu}>
          컴포넌트 선택
        </button>
        <ComponentsContextMenuComponent
          isComponentsContextMenuOpen={isComponentsContextMenuOpen}
          addComponent={addComponent}
          toggleContextMenu={toggleContextMenu}
        />
      </TopArea>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div>
          <DroppableContents
            droppableId={`grayLine`}
            currentSlide={currentSlide}
            contents={contents}
            position={position}
            updateContent={updateComponent}
            deleteContent={deleteComponent}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default ComponentGrayLineCreator;
