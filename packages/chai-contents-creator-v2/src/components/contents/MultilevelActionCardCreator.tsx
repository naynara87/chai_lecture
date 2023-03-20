import styled from "@emotion/styled";
import {
  colorPalette,
  Content,
  ContentType,
  ID,
  MultilevelActionCardContentData,
  vh,
} from "chai-ui-v2";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import useComponentContext from "../../hooks/useComponentContext";
import { useCallback, useMemo, useState } from "react";
import { getContentComponentsDefaultValue } from "../../data/appData";
import useComponent from "../../hooks/useComponent";
import { Droppable, DragDropContext, DropResult } from "react-beautiful-dnd";
import { cloneDeep } from "lodash";

const MultilevelActionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MultilevelActionCardList = styled.div`
  display: flex;
  gap: 16px;
`;
const MultilevelActionCard = styled.div`
  display: flex;
  width: 300px;
  min-height: 134px;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 16px;
  border: 3px solid #d6e9ff;
  border-radius: 16px;
  &.important-card {
    background: linear-gradient(0deg, #e3e8ff, #e9faff);
  }
`;
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
const AddStep = styled.button`
  height: 50px;
  margin-bottom: 8px;
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
  margin: ${vh(24)};
`;

const MultilevelActionCardCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as MultilevelActionCardContentData;

  const [step, setStep] = useState(0);

  const {
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  const { getComponent, focusedId } = useComponent();

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
      if (newContent.data[sourceArea].length < 1) return;

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

  const contents = useMemo(() => {
    return new Array(step + 1).fill("").map((item, itemIndex) => {
      return (
        <Droppable droppableId={`multiLevel_${itemIndex}`} key={itemIndex}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {itemIndex !== 0 && <DashedBar />}
              {thisContent.data[itemIndex].map((component, index) => {
                return getComponent({
                  index,
                  currentSlide,
                  content: component,
                  isFocused: focusedId === component.id,
                  setFocusedId,
                  updateContent: updateComponent,
                  position,
                });
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );
    });
  }, [
    currentSlide,
    focusedId,
    getComponent,
    setFocusedId,
    step,
    thisContent,
    position,
    updateComponent,
  ]);

  const addStep = () => {
    if (thisContent.data[step].length < 1) {
      return;
    }
    setStep((prev) => prev + 1);
    const newContent = {
      ...thisContent,
      data: [...thisContent.data, []],
    };
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
    >
      <MultilevelActionCardWrapper>
        <MultilevelActionCardList>
          <MultilevelActionCard className="important-card">
            <TopArea>
              {/* TODO: 중요카드 체크시 MultilevelActionCard에 important-card 클래스 생성 */}
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
              {contents}
            </DragDropContext>
            {step < 2 && <AddStep onClick={addStep}>내용 추가</AddStep>}
            {/* TODO: 컴포넌트 선택 하면 이곳에 선택된 컴포넌트들이 순차적으로 추가 */}
          </MultilevelActionCard>
        </MultilevelActionCardList>
      </MultilevelActionCardWrapper>
    </ContentCreatorLayout>
  );
};

export default MultilevelActionCardCreator;
