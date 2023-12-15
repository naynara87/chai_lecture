import styled from "@emotion/styled";
import { AllTemplateData, Content, ContentType, ID } from "chai-ui-v2";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { grayLineContentComponents } from "../../data/appData";
import useComponentContext from "../../hooks/useComponentContext";
import { CommonTemplateComponentLocation } from "../../types/page";
import DroppableContents from "./DroppableContents";

const GrayLineWrap = styled.div`
  width: 100%;
  padding: 1vmin;
  min-height: 60px;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  position: relative;
  .btn-comp-select {
    position: absolute;
    right: 0;
    top: -0;
  }
  & .btn-text {
    border-radius: 2em;
    padding: 0.5vmin 1vmin;
    font-size: 12px;
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
    <GrayLineWrap className="gray-line">
      <TopArea>
        <button className="btn-comp-select" onClick={toggleContextMenu}>
          컴포넌트 선택
        </button>
        <ComponentsContextMenuComponent
          isComponentsContextMenuOpen={isComponentsContextMenuOpen}
          addComponent={addComponent}
          toggleContextMenu={toggleContextMenu}
          contentComponents={grayLineContentComponents}
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
    </GrayLineWrap>
  );
};

export default ComponentGrayLineCreator;
