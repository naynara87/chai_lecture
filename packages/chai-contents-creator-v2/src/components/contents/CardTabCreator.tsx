import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import {
  CardTabContentData,
  colorPalette,
  Content,
  ContentType,
  ID,
} from "chai-ui-v2";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import useComponentContext from "../../hooks/useComponentContext";
import { getContentComponentsDefaultValue } from "../../data/appData";
import { cloneDeep } from "lodash";
import useComponent from "../../hooks/useComponent";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const CardTabWrapper = styled.div`
  .flex-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TabTitleWrap = styled.div`
  .tab-title-wrap {
    border-radius: 10px;
    background-color: ${colorPalette.bubblegray};

    &.disabled {
      background-color: ${colorPalette.gray550};
    }
  }

  .tab-title {
    border-radius: 10px;
    font-size: 16px;
    background-color: ${colorPalette.bubblegray};

    &:disabled {
      background-color: ${colorPalette.gray550};
    }

    &.active:disabled {
      background-color: ${colorPalette.gray600};
    }
  }

  .tab-title-input-wrap {
    margin: 10px auto;

    > input {
      width: 100%;
      height: 40px;
      padding: 10px 15px;
      border: 1px solid ${colorPalette.gray200};
      border-radius: 10px;
      background-color: transparent;
      font-size: 12px;
      box-sizing: border-box;
      appearance: none;
      outline: none;
      box-shadow: none;
    }
  }
`;

const TabCard = styled.div`
  position: relative;
  width: 500px;
  min-height: 80px;
  margin-top: 10px;
  padding: 8px;
  border: 1px solid ${colorPalette.gray600};
  border-radius: 16px;

  .btns-wrap {
    justify-content: flex-end;
    align-items: flex-start;
    gap: 16px;
  }
`;

const TabInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  background-color: transparent;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: none;
  box-shadow: none;
`;

const CardTabCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  deleteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as CardTabContentData;

  const [focusedTabTitleIndex, setFocusedTabTitleIndex] = useState<number>(0);
  const [focusedCardComponentSelectIndex, setFocusedCardComponentSelectIndex] =
    useState<number>(0);
  const [focusedTabTitleText, setFocusedTabTitleText] = useState<string>();

  const {
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  const { getComponent, focusedId } = useComponent();

  const addComponent = useCallback(
    (cardIndex: number) => (contentType: ContentType) => {
      const component = getContentComponentsDefaultValue()[contentType];
      const newContent = {
        ...thisContent,
        data: thisContent.data.map((content, contentIndex) => {
          if (contentIndex === focusedTabTitleIndex) {
            const newContents = cloneDeep(content);
            newContents.cards.map((_content, _contentIndex) => {
              if (_contentIndex === cardIndex && component) {
                _content.contents.push(component);
              }
              return _content;
            });
            return newContents;
          }
          return content;
        }),
      };
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [
      currentSlide.id,
      position,
      thisContent,
      updateContent,
      focusedTabTitleIndex,
    ],
  );

  const tabTitles = useMemo(() => {
    return thisContent.data.map((content, contentIndex) => {
      return (
        <button
          className={`tab-title ${
            focusedTabTitleIndex === contentIndex ? "active" : ""
          }`}
          disabled={!thisContent.meta?.isUseTab}
          onClick={() => {
            setFocusedTabTitleIndex(contentIndex);
            setFocusedTabTitleText(thisContent.data[contentIndex].tabName);
          }}
          key={contentIndex}
        >
          {content.tabName ? content.tabName : `탭${contentIndex + 1}`}
        </button>
      );
    });
  }, [focusedTabTitleIndex, thisContent]);

  const getCurrentContent = (
    cardTabData: CardTabContentData["data"],
  ): CardTabContentData => {
    return {
      ...thisContent,
      data: cardTabData,
    };
  };

  const updateCardTabData = (cardTabData: CardTabContentData["data"]) => {
    updateContent(
      currentSlide.id,
      content.id,
      position,
      getCurrentContent(cardTabData),
    ); // total content 업데이트
  };

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setTabName = (rowIndex: number, text: string) => {
    const updatedData = thisContent.data.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...item,
          tabName: text,
        };
      }
      return item;
    });
    updateCardTabData(updatedData);
  };

  const setIsUseTab = () => {
    const updatedData = {
      ...thisContent,
      meta: {
        isUseTab: !thisContent.meta?.isUseTab,
      },
    };
    updateContent(currentSlide.id, content.id, position, updatedData);
  };

  const updateComponent = useCallback(
    (
      slideId: ID,
      contentId: ID,
      position: CommonTemplateComponentLocation,
      updatedContent: Content,
    ) => {
      const newContent = {
        ...thisContent,
        data: thisContent.data.map((contents, contentIndex) => {
          if (contentIndex === focusedTabTitleIndex) {
            const newComponents = {
              ...contents,
              cards: contents.cards.map((card) => {
                const newCard = card.contents.map((content, contentIndex) => {
                  if (content.id === contentId) {
                    return updatedContent;
                  }
                  return content;
                });
                return {
                  contents: newCard,
                };
              }),
            };
            return newComponents;
          }
          return contents;
        }),
      };
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [thisContent, currentSlide.id, updateContent, focusedTabTitleIndex],
  );

  const deleteComponent = useCallback(
    (cardIndex: number) =>
      (
        slideId: ID,
        contentId: ID,
        position: CommonTemplateComponentLocation,
      ) => {
        const newContent = cloneDeep(thisContent);
        const { cards } = newContent.data[focusedTabTitleIndex];
        const copyCard = cloneDeep(cards[cardIndex].contents);
        const removeIndex = copyCard.findIndex(
          (component) => component.id === contentId,
        );
        copyCard.splice(removeIndex, 1);
        cards[cardIndex].contents = copyCard;
        updateContent(currentSlide.id, thisContent.id, position, newContent);
      },
    [thisContent, focusedTabTitleIndex, currentSlide.id, updateContent],
  );

  const deleteCard = useCallback(
    (cardIndex: number) => () => {
      const newContent = cloneDeep(thisContent);
      const { cards } = newContent.data[focusedTabTitleIndex];
      const removeIndex = cards.findIndex((v, i) => i === cardIndex);
      cards.splice(removeIndex, 1);
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [
      thisContent,
      focusedTabTitleIndex,
      currentSlide.id,
      updateContent,
      position,
    ],
  );

  const tabCards = useMemo(() => {
    return thisContent.data[focusedTabTitleIndex].cards.map(
      (card, cardIndex) => {
        return (
          <TabCard key={cardIndex}>
            <Droppable droppableId={`cardTab_${cardIndex}`} key={cardIndex}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <div className="btns-wrap">
                    <button
                      className="btn-comp-select"
                      onClick={(e) => {
                        toggleContextMenu(e);
                        setFocusedCardComponentSelectIndex(cardIndex);
                      }}
                    >
                      컴포넌트 선택
                    </button>
                    {focusedCardComponentSelectIndex === cardIndex && (
                      <ComponentsContextMenuComponent
                        isComponentsContextMenuOpen={
                          isComponentsContextMenuOpen
                        }
                        addComponent={addComponent(cardIndex)}
                        toggleContextMenu={toggleContextMenu}
                      />
                    )}
                    {thisContent.data[focusedTabTitleIndex].cards.length >
                      1 && (
                      <ObjectDeleteButton onClick={deleteCard(cardIndex)} />
                    )}
                  </div>
                  {card.contents.map((component, index) => {
                    return getComponent({
                      index,
                      currentSlide,
                      content: component,
                      isFocused: focusedId === component.id,
                      setFocusedId,
                      updateContent: updateComponent,
                      position,
                      deleteContent: deleteComponent(cardIndex),
                    });
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </TabCard>
        );
      },
    );
  }, [
    thisContent,
    focusedTabTitleIndex,
    addComponent,
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
    focusedCardComponentSelectIndex,
    currentSlide,
    deleteComponent,
    focusedId,
    getComponent,
    position,
    setFocusedId,
    updateComponent,
    deleteCard,
  ]);

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
      const { cards } = newContent.data[focusedTabTitleIndex];

      const [removed] = cards[sourceArea].contents.splice(source.index, 1);
      cards[endArea].contents.splice(destination.index, 0, removed);

      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [
      thisContent,
      currentSlide.id,
      position,
      updateContent,
      focusedTabTitleIndex,
    ],
  );

  const addCard = useCallback(() => {
    const newContent = cloneDeep(thisContent);
    newContent.data[focusedTabTitleIndex].cards.push({
      contents: [],
    });
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  }, [
    currentSlide.id,
    focusedTabTitleIndex,
    thisContent,
    updateContent,
    position,
  ]);

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
    >
      <CardTabWrapper className="card-tab-wrapper">
        <div className="flex-wrap">
          <AddButton onClick={addCard}>카드 추가</AddButton>
          <CheckBoxWrapper
            isActivated={thisContent.meta?.isUseTab ?? false}
            onClick={setIsUseTab}
          >
            탭 사용
          </CheckBoxWrapper>
        </div>
        <TabTitleWrap className="tab-title-view--wrap">
          <div
            className={`tab-title-wrap ${
              thisContent.meta?.isUseTab ? "" : "disabled"
            }`}
          >
            {tabTitles}
          </div>
          <div className="tab-title-input-wrap">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.currentTarget[0] as HTMLInputElement;
                setTabName(focusedTabTitleIndex, target.value || "");
              }}
            >
              <TabInput
                type="text"
                placeholder={`탭${
                  focusedTabTitleIndex + 1
                } 타이틀을 입력해주세요`}
                value={focusedTabTitleText || ""}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setFocusedTabTitleText(target.value);
                }}
              />
            </form>
          </div>
        </TabTitleWrap>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {tabCards}
        </DragDropContext>
      </CardTabWrapper>
    </ContentCreatorLayout>
  );
};

export default CardTabCreator;
