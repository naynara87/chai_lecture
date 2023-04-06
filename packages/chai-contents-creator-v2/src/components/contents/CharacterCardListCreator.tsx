import styled from "@emotion/styled";
import {
  CharacterCardListContentData,
  CharacterCardListItem,
  colorPalette,
  ComponentButtonRadiFillMain,
  Content,
  ContentType,
  ID,
} from "chai-ui-v2";
import React, { useCallback, useEffect, useState } from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import AddButton from "../atoms/AddButton";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import ModalCharacterCardList from "../molecules/modal/ModalCharacterCardList";
import { getContentComponentsDefaultValue } from "../../data/appData";
import { cloneDeep } from "lodash";
import { DropResult } from "react-beautiful-dnd";
import { v4 as uuidV4 } from "uuid";

const TrainingWrapper = styled.div`
  .training-create-wrap {
    margin-bottom: 50px;
  }

  .training-list {
    position: relative;
  }

  .btn-delete {
    z-index: 1;
    position: absolute;
    top: 10px;
    left: auto;
    right: 10px;
  }

  .img-wrap {
    background-color: ${colorPalette.gray200};
    background-size: auto;
  }
`;

const ImageThumbWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
`;

const ImageThumb = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
  & > img.empty-image {
    width: 60px;
    height: 60px;
  }
`;

const TitleArea = styled.div`
  padding-top: 4vw;
  font-weight: 600;
  font-size: 1.6vw;
  line-height: 1.5;
`;

const DescriptionArea = styled.div`
  height: 100%;
  padding-bottom: 2vh;
`;

const GradiWrap = styled.div`
  min-height: 8.25vw;
  padding-bottom: 2.5vw;
  border-radius: 1vw 1vw 0 0;
  text-align: center;
  background-image: linear-gradient(to top, #e3e8ff 0%, #e9faff 100%);
`;

const TrainingList = styled.div`
  height: max-content !important;
`;

type ColumnIndex = "title" | "description";

/**
 * CH-02-05 학습 요약
 */
const CharacterCardListCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  deleteContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as CharacterCardListContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();

  const [focusedColumnIndex, setFocusedColumnIndex] = useState<ColumnIndex>();

  const [modalState, setModalState] = useState<boolean[]>(
    Array(thisContent.data.length).fill(false),
  );

  const fucusTextEditor = useCallback(
    (characterCardListIndex: number, columnIndex: ColumnIndex) =>
      (e: React.MouseEvent) => {
        e.stopPropagation();
        setFocusedId(e, content.id);
        setFocusedTextEditorIndex(characterCardListIndex);
        setFocusedColumnIndex(columnIndex);
      },
    [content.id, setFocusedId],
  );

  const resetFocusedTextEditorIndex = useCallback(() => {
    setFocusedTextEditorIndex(undefined);
    setFocusedColumnIndex(undefined);
  }, []);

  useEffect(() => {
    window.addEventListener("click", resetFocusedTextEditorIndex);
    return () => {
      window.removeEventListener("click", resetFocusedTextEditorIndex);
    };
  }, [resetFocusedTextEditorIndex]);

  const isTextEditorFocused = useCallback(
    (
      isCurrentComponentFocused: boolean,
      characterCardIndex: number,
      columnIndex: ColumnIndex,
    ) => {
      return (
        isCurrentComponentFocused &&
        focusedTextEditorIndex === characterCardIndex &&
        columnIndex === focusedColumnIndex
      );
    },
    [focusedTextEditorIndex, focusedColumnIndex],
  );

  const updateCharacterCardData = (
    characterCardData: CharacterCardListContentData["data"],
  ) => {
    updateContent(
      currentSlide.id,
      content.id,
      position,
      getCurrentContent(characterCardData),
    ); // total content 업데이트
  };

  const getCurrentContent = (
    characterCardData: CharacterCardListContentData["data"],
  ): CharacterCardListContentData => {
    return {
      ...thisContent,
      data: characterCardData,
    };
  };

  const addCard = () => {
    if (thisContent.data.length >= 4) {
      alert("최대 4개까지 등록 가능합니다.");
      return;
    }
    const newContent = {
      ...thisContent,
      data: [
        ...thisContent.data,
        {
          title: "",
          description: "",
          modalContents: [],
          character: {
            src: "",
          },
        } as CharacterCardListItem,
      ],
    };
    setModalState([...modalState, false]);
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
  const getText = (rowIndex: number, columnIndex: "title" | "description") => {
    return thisContent.data[rowIndex][columnIndex] ?? "";
  };

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = (
    rowIndex: number,
    columnIndex: "title" | "description",
    text: string,
  ) => {
    const updatedData = thisContent.data.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...item,
          [columnIndex]: text,
        };
      }
      return item;
    });
    updateCharacterCardData(updatedData);
  };

  const deleteCard = (index: number) => {
    if (thisContent.data.length === 1) {
      alert("최소 1개이상 입력하셔야 합니다.");
      return;
    }
    const updatedData = thisContent.data.filter((_, i) => i !== index);
    updateCharacterCardData(updatedData);
    setModalState([...modalState, false]);
  };

  const setImageUrl = (index: number) => (src: string) => {
    const newContent = {
      ...thisContent,
      data: thisContent.data.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {
            ...data,
            character: {
              src: src,
            },
          };
        }
        return data;
      }),
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const closeModalByIndex = (index: number) => () => {
    const newModalState = [...modalState];
    newModalState[index] = false;
    setModalState(newModalState);
  };

  const openModalByIndex = (index: number) => () => {
    const newModalState = [...modalState];
    newModalState[index] = true;
    setModalState(newModalState);
  };

  /**
   * 모달안에서 동작할 컴포넌트 추가 함수
   */
  const addComponent = (cardIndex: number) => (contentType: ContentType) => {
    const selectedDefaultContent =
      getContentComponentsDefaultValue()[contentType];
    const newContent: CharacterCardListContentData = cloneDeep(thisContent);
    if (newContent.data[cardIndex].modalContents === undefined) {
      newContent.data[cardIndex].modalContents = [];
    }
    selectedDefaultContent &&
      newContent.data[cardIndex].modalContents!.push(selectedDefaultContent);
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  /**
   * 모달안에서 동작할 컴포넌트 업데이트 함수
   */
  const updateComponent =
    (cardIndex: number) =>
    (
      slideId: ID,
      contentId: ID,
      position: CommonTemplateComponentLocation,
      updatedContent: Content,
    ) => {
      const newContent: CharacterCardListContentData = cloneDeep(thisContent);
      const thisComponentIndex = newContent.data[
        cardIndex
      ].modalContents!.findIndex((component) => component.id === contentId);
      newContent.data[cardIndex].modalContents![thisComponentIndex] =
        updatedContent;
      updateContent(currentSlide.id, content.id, position, newContent);
    };

  /**
   * 모달안에서 동작할 컴포넌트 삭제 함수
   */
  const deleteComponent =
    (cardIndex: number) =>
    (slideId: ID, contentId: ID, position: CommonTemplateComponentLocation) => {
      const newContent: CharacterCardListContentData = cloneDeep(thisContent);
      const thisComponentIndex = newContent.data[
        cardIndex
      ].modalContents!.findIndex((component) => component.id === contentId);
      newContent.data[cardIndex].modalContents!.splice(thisComponentIndex, 1);
      updateContent(currentSlide.id, content.id, position, newContent);
    };

  const handleDragEnd = (cardIndex: number) => (result: DropResult) => {
    const { destination, draggableId } = result;
    if (!destination) {
      return;
    }
    const newContent: CharacterCardListContentData = cloneDeep(thisContent);
    const thisComponentIndex = newContent.data[
      cardIndex
    ].modalContents!.findIndex((component) => component.id === draggableId);
    const [removed] = newContent.data[cardIndex].modalContents!.splice(
      thisComponentIndex,
      1,
    );
    newContent.data[cardIndex].modalContents!.splice(
      destination.index,
      0,
      removed,
    );
    updateContent(currentSlide.id, content.id, position, newContent);
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
      <TrainingWrapper className="training-wrapper">
        <AddButton onClick={addCard}>학습목표 추가</AddButton>
        <div className="training-list-wrap training-end">
          {thisContent.data.map((item, index) => {
            return (
              <div className="training-create-wrap" key={uuidV4()}>
                <TrainingList className="training-list">
                  <ObjectDeleteButton onClick={() => deleteCard(index)} />
                  <GradiWrap>
                    <ImageThumbWrap>
                      <ImageThumb className="img-wrap">
                        {item.character.src ? (
                          <img src={item.character.src} alt="" />
                        ) : (
                          <img src={ImageIcon} alt="" className="empty-image" />
                        )}
                      </ImageThumb>
                    </ImageThumbWrap>
                    <TitleArea onClick={fucusTextEditor(index, "title")}>
                      <TextEditorViewer
                        isFocused={isTextEditorFocused(
                          isFocused,
                          index,
                          "title",
                        )}
                        setText={(text) => setText(index, "title", text)}
                        text={getText(index, "title")}
                        limitTextLength={10}
                      />
                    </TitleArea>
                  </GradiWrap>
                  <div className="white-wrap">
                    <DescriptionArea
                      onClick={fucusTextEditor(index, "description")}
                      className="text"
                    >
                      <TextEditorViewer
                        isFocused={isTextEditorFocused(
                          isFocused,
                          index,
                          "description",
                        )}
                        setText={(text) => setText(index, "description", text)}
                        text={getText(index, "description")}
                      />
                    </DescriptionArea>
                    <div className="btns-wrap">
                      <ComponentButtonRadiFillMain
                        text="학습 요약"
                        onClickBtn={openModalByIndex(index)}
                      />
                    </div>
                  </div>
                </TrainingList>
                <UrlInputWrapper
                  typeText="이미지"
                  onSubmit={setImageUrl(index)}
                  defaultText={thisContent.data[index].character.src}
                />
                <ModalCharacterCardList
                  isModalOpen={modalState[index]}
                  closeModal={closeModalByIndex(index)}
                  closeOnBackgroundClick={false}
                  addComponent={addComponent(index)}
                  updateContent={updateComponent(index)}
                  deleteContent={deleteComponent(index)}
                  currentSlide={currentSlide}
                  position={position}
                  contents={thisContent.data[index].modalContents}
                  handleDragEnd={handleDragEnd(index)}
                />
              </div>
            );
          })}
        </div>
      </TrainingWrapper>
    </ContentCreatorLayout>
  );
};

export default CharacterCardListCreator;
