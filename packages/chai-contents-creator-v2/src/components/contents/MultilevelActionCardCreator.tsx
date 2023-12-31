import styled from "@emotion/styled";
import {
  colorPalette,
  Content,
  ContentType,
  ID,
  MultilevelActionCardContentData,
} from "chai-ui-v2";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import useComponentContext from "../../hooks/useComponentContext";
import { useCallback } from "react";
import {
  cardContentComponents,
  getContentComponentsDefaultValue,
} from "../../data/appData";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { cloneDeep } from "lodash";
import DroppableContents from "../molecules/DroppableContents";

const MultilevelActionContentContainer = styled.div`
  margin: 40px auto 0;
`;

const MultilevelActionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MultilevelActionCardList = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  max-width: 72vmin;
  width: 100%;
`;
const MultilevelActionCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 134px;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 16px;
  border: 3px solid #d6e9ff;
  border-radius: 16px;
  &.important-card {
    background: linear-gradient(0deg, #e3e8ff, #e9faff);
  }

  .image-with-caption-wrapper {
    img {
      width: 100%;
      max-width: 200px;
      max-height: 150px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }

    .caption-wrap {
      width: 100%;
      /* max-width: 200px; */
    }
  }
`;
const TopArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  position: relative;
  .btn-comp-select {
    position: absolute;
    right: 0;
    top: 0;
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
const AddStep = styled.button`
  width: 268px;
  height: 50px;
  margin: 0 auto;
  padding: 14px 16px;
  border: 1px solid ${colorPalette.subblue};
  background-color: ${colorPalette.white};
  color: ${colorPalette.mainlight};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  appearance: none;
  outline: none;
  box-shadow: none;
`;
const DashedBar = styled.div`
  height: 0px;
  border: 1px dashed #7686d5;
  margin: 3vmin;
`;

/**
 * CH-03-02-01 액션 학습 카드 - 단어용
 */
const MultilevelActionCardCreator = ({
  content,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  deleteContent,
  copyContent,
  pasteContent,
}: DraggableContentCommonProps) => {
  const thisContent = content as MultilevelActionCardContentData;

  const step = thisContent.data.length - 1;

  const {
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  const addComponent = (contentType: ContentType) => {
    const content = getContentComponentsDefaultValue()[contentType];

    const newContent = {
      ...thisContent,
      data: thisContent.data.map((currentData, dataIndex) => {
        if (dataIndex === step && content) {
          return [...currentData, { ...content }];
        }
        return currentData;
      }),
    };
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }

      const [, _startArea] = source.droppableId.split("_");
      const sourceArea = parseInt(_startArea);
      const [, _endArea] = destination.droppableId.split("_");
      const endArea = parseInt(_endArea);

      const newContent = cloneDeep(thisContent);
      const [removed] = newContent.data[sourceArea].splice(source.index, 1);
      newContent.data[endArea].splice(destination.index, 0, removed);

      // 드래그한 공간에 컴포넌트가 하나도 없을때
      if (newContent.data[sourceArea].length < 1) {
        newContent.data = newContent.data.filter(
          (data, index) => index !== sourceArea,
        );
      }

      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [thisContent, currentSlide.id, position, updateContent],
  );

  const updateComponent = useCallback(
    (
      slideId: ID,
      contentId: ID,
      position: CommonTemplateComponentLocation,
      updatedContent: Content,
    ) => {
      const newContent = {
        ...thisContent,
        data: thisContent.data.map((components) => {
          const newComponents = components.map((component) => {
            if (component.id === contentId) {
              return updatedContent;
            }
            return component;
          });
          return newComponents;
        }),
      };
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [thisContent, currentSlide.id, updateContent],
  );

  const deleteComponent = useCallback(
    (slideId: ID, contentId: ID, position: CommonTemplateComponentLocation) => {
      const newContent = {
        ...thisContent,
      };
      newContent.data = newContent.data
        .map((components) => {
          const newComponents = components.filter(
            (component) => component.id !== contentId,
          );
          return newComponents;
        })
        .filter((data) => data.length !== 0);

      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [thisContent, currentSlide.id, updateContent],
  );

  const addStep = () => {
    if (thisContent.data[thisContent.data.length - 1].length === 0) {
      // 마지막 칸에 컴포넌트가 없을때
      return;
    }
    const newContent = {
      ...thisContent,
      data: [...thisContent.data, []],
    };
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  return (
    <MultilevelActionContentContainer>
      <ContentCreatorLayout
        isDraggable={isDraggable}
        draggableProvided={draggableProvided}
        deleteContent={deleteContent}
        slideId={currentSlide.id}
        content={content}
        position={position}
        align="center"
        copyContent={copyContent}
        pasteContent={pasteContent}
      >
        <MultilevelActionCardWrapper>
          <MultilevelActionCardList>
            <MultilevelActionCard className="important-card">
              <TopArea>
                <button className="btn-comp-select" onClick={toggleContextMenu}>
                  컴포넌트 선택
                </button>
                <ComponentsContextMenuComponent
                  isComponentsContextMenuOpen={isComponentsContextMenuOpen}
                  addComponent={addComponent}
                  toggleContextMenu={toggleContextMenu}
                  contentComponents={cardContentComponents}
                />
              </TopArea>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                {Array(thisContent.data.length)
                  .fill("")
                  .map((item, itemIndex) => {
                    return (
                      <div key={itemIndex}>
                        {itemIndex !== 0 && <DashedBar />}
                        <DroppableContents
                          droppableId={`multiLevel_${itemIndex}`}
                          currentSlide={currentSlide}
                          contents={thisContent.data[itemIndex]}
                          position={position}
                          updateContent={updateComponent}
                          deleteContent={deleteComponent}
                        />
                      </div>
                    );
                  })}
              </DragDropContext>
              {thisContent.data.length < 3 && (
                <AddStep onClick={addStep}>내용 추가</AddStep>
              )}
            </MultilevelActionCard>
          </MultilevelActionCardList>
        </MultilevelActionCardWrapper>
      </ContentCreatorLayout>
    </MultilevelActionContentContainer>
  );
};

export default MultilevelActionCardCreator;
