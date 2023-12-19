import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Content,
  ContentsCardItem,
  ContentsCardListContentData,
  ContentType,
  ID,
  useToast,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
  cardContentComponents,
  getContentComponentsDefaultValue,
} from "../../data/appData";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import ComponentsContextMenuComponent from "../molecules/ComponentsContextMenuComponent";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import DroppableContents from "../molecules/DroppableContents";

const MultilevelActionCardWrapper = styled.div``;
const MultilevelActionCardList = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;
const MultilevelActionCard = styled.div`
  display: flex;
  min-width: 24vmin;
  min-height: 13vmin;
  flex-direction: column;
  padding: 1vmin;
  border: 3px solid #d6e9ff;
  border-radius: 1vmin;
  &.important-card {
    background: linear-gradient(0deg, #e3e8ff, #e9faff);
  }
`;
const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vmin;
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

const contextMenuStyle = css`
  transform: translateY(45px);
`;

const deleteButtonStyle = css`
  position: absolute;
  top: -12px;
  right: -20px;
  background-color: #999999;
`;

/**
 * CH-03-01 학습 카드
 * ContentsCardList
 */
const ContentsCardListCreator = ({
  content,
  updateContent,
  deleteContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as ContentsCardListContentData;

  const [contextMenuOpenStateList, setContextMenuOpenStateList] = useState<
    boolean[]
  >(Array.from({ length: thisContent.data.length }, () => false));
  const { addToast } = useToast();

  const toggleContextMenu = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    const newContextMenuOpenStateList = [...contextMenuOpenStateList];
    newContextMenuOpenStateList[index] = !newContextMenuOpenStateList[index];
    setContextMenuOpenStateList(newContextMenuOpenStateList);
  };

  const closeContextMenu = useCallback(() => {
    setContextMenuOpenStateList(
      Array.from({ length: thisContent.data.length }, () => false),
    );
  }, [thisContent.data.length]);

  useEffect(() => {
    window.addEventListener("click", closeContextMenu);
    return () => {
      window.removeEventListener("click", closeContextMenu);
    };
  }, [closeContextMenu]);

  const addComponent = (listIndex: number) => (contentType: ContentType) => {
    const selectedDefaultContent =
      getContentComponentsDefaultValue()[contentType];
    const thisList = thisContent.data[listIndex];
    const thisListCopy: ContentsCardItem = cloneDeep(thisList);
    selectedDefaultContent &&
      thisListCopy.contents.push(selectedDefaultContent);

    const newContent: ContentsCardListContentData = cloneDeep(thisContent);
    newContent.data[listIndex] = thisListCopy;

    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  const addCard = () => {
    const newContent: ContentsCardListContentData = cloneDeep(thisContent);
    newContent.data.push({
      isAccent: false,
      contents: [],
    });
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  /**
   * NOTE : 만약 삭제 전에 모달을 띄워서 삭제를 한다면
   * 이 함수는 삭제 모달한테 전달해야 하는데
   * listIndex는 삭제를 위한 state를 하나 만들어서 관리할 수 있을 것 같다
   */
  const deleteCard = (listIndex: number) => {
    if (thisContent.data.length === 1) {
      addToast("최소 1개이상 입력하셔야 합니다.", "info");
      return;
    }

    const newContent: ContentsCardListContentData = cloneDeep(thisContent);
    newContent.data.splice(listIndex, 1);
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  const toggleCardAccent = (listIndex: number) => {
    const newContent: ContentsCardListContentData = cloneDeep(thisContent);
    newContent.data[listIndex].isAccent = !newContent.data[listIndex].isAccent;
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceListIndex = parseInt(source.droppableId.split("_")[1]);
    const destinationListIndex = parseInt(
      destination.droppableId.split("_")[1],
    );

    const newContent: ContentsCardListContentData = cloneDeep(thisContent);

    const [removed] = newContent.data[sourceListIndex].contents.splice(
      source.index,
      1,
    );
    newContent.data[destinationListIndex].contents.splice(
      destination.index,
      0,
      removed,
    );

    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  const updateComponent =
    (listIndex: number) =>
    (
      slideId: ID,
      contentId: ID,
      position: CommonTemplateComponentLocation,
      updatedContent: Content,
    ) => {
      const newContent: ContentsCardListContentData = cloneDeep(thisContent);
      const thisList = newContent.data[listIndex];
      const thisListCopy: ContentsCardItem = cloneDeep(thisList);
      const thisComponentIndex = thisListCopy.contents.findIndex(
        (component) => component.id === contentId,
      );
      thisListCopy.contents[thisComponentIndex] = updatedContent;
      newContent.data[listIndex] = thisListCopy;
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    };

  const deleteComponent =
    (listIndex: number) =>
    (slideId: ID, contentId: ID, position: CommonTemplateComponentLocation) => {
      const newContent: ContentsCardListContentData = cloneDeep(thisContent);
      const thisList = newContent.data[listIndex];
      const thisListCopy: ContentsCardItem = cloneDeep(thisList);
      const thisComponentIndex = thisListCopy.contents.findIndex(
        (component) => component.id === contentId,
      );
      thisListCopy.contents.splice(thisComponentIndex, 1);
      newContent.data[listIndex] = thisListCopy;
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    };

  return (
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
        <AddButton onClick={addCard}>카드 추가</AddButton>
        <MultilevelActionCardList>
          <DragDropContext onDragEnd={handleDragEnd}>
            {thisContent.data.map((listItem, listIndex) => {
              return (
                <MultilevelActionCard
                  key={listIndex}
                  className={listItem.isAccent ? "important-card" : ""}
                >
                  <TopArea>
                    <ObjectDeleteButton
                      onClick={() => deleteCard(listIndex)}
                      customCSS={deleteButtonStyle}
                    />
                    <CheckBoxWrapper
                      onClick={() => toggleCardAccent(listIndex)}
                      isActivated={listItem.isAccent}
                    >
                      중요 카드
                    </CheckBoxWrapper>
                    <AddButton onClick={toggleContextMenu(listIndex)}>
                      컴포넌트 선택
                    </AddButton>
                    <ComponentsContextMenuComponent
                      isComponentsContextMenuOpen={
                        contextMenuOpenStateList[listIndex]
                      }
                      addComponent={addComponent(listIndex)}
                      toggleContextMenu={toggleContextMenu(listIndex)}
                      customCSS={contextMenuStyle}
                      contentComponents={cardContentComponents}
                    />
                  </TopArea>
                  <DroppableContents
                    droppableId={`contentsCard_${listIndex}`}
                    currentSlide={currentSlide}
                    contents={listItem.contents}
                    position={position}
                    updateContent={updateComponent(listIndex)}
                    deleteContent={deleteComponent(listIndex)}
                  />
                </MultilevelActionCard>
              );
            })}
          </DragDropContext>
        </MultilevelActionCardList>
      </MultilevelActionCardWrapper>
    </ContentCreatorLayout>
  );
};

export default ContentsCardListCreator;
