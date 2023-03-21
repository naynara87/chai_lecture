import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ContentsCardItem,
  ContentsCardListContentData,
  ContentType,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { getContentComponentsDefaultValue } from "../../data/appData";
import { DraggableContentCommonProps } from "../../types/page";
import AddButton from "../atoms/AddButton";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import ComponentsContextMenuComponent from "../molecules/ComponentsContextMenuComponent";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import DroppableContents from "../molecules/DroppableContents";

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
  justify-content: space-between;
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

const contextMenuStyle = css`
  transform: translateY(45px);
`;

/**
 * CH-03-01 학습 카드
 * ContentsCardList
 */
const ContentsCardList = ({
  content,
  updateContent,
  deleteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as ContentsCardListContentData;

  const [contextMenuOpenStateList, setContextMenuOpenStateList] = useState<
    boolean[]
  >(Array.from({ length: thisContent.data.length }, () => false));

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

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
    >
      <MultilevelActionCardWrapper>
        {/* 카드 추가 */}
        <AddButton>카드 추가</AddButton>
        <MultilevelActionCardList>
          <DragDropContext onDragEnd={(result) => console.log(result)}>
            {thisContent.data.map((listItem, listIndex) => {
              return (
                <MultilevelActionCard
                  key={listIndex}
                  className={listItem.isAccent ? "important-card" : ""}
                >
                  <TopArea>
                    <CheckBoxWrapper
                      onClick={
                        // TODO: 중요 카드 체크박스 클릭 시 해당 카드의 isAccent 값을 변경
                        () => {}
                      }
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
                    />
                  </TopArea>
                  <DroppableContents
                    droppableId={`multiLevel_${listIndex}`}
                    currentSlide={currentSlide}
                    contents={listItem.contents}
                    position={position}
                    updateContent={() => {
                      // TODO
                    }}
                    deleteContent={() => {
                      // TODO
                    }}
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

export default ContentsCardList;
