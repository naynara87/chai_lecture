import styled from "@emotion/styled";
import {
  CharacterCardListContentData,
  colorPalette,
  ComponentButtonRadiFillMain,
} from "chai-ui-v2";
import React, { useCallback, useEffect, useState } from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import AddButton from "../atoms/AddButton";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ImageIcon from "../../assets/images/icon/icon_image.svg";

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

const ImageThumb = styled.div`
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  position: relative;
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

type ColumnIndex = "title" | "description";

const CharacterCardListCreate = ({
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
  const thisContent = content as CharacterCardListContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();

  const [focusedColumnIndex, setFocusedColumnIndex] = useState<ColumnIndex>();

  const fucusTextEditor = useCallback(
    (characterCardListIndex: number, columnIndex: ColumnIndex) => () => {
      setFocusedTextEditorIndex(characterCardListIndex);
      setFocusedColumnIndex(columnIndex);
    },
    [],
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

  /**
   * 번호 추가
   */
  const addNumberingTextItem = () => {
    const newContent = {
      ...thisContent,
      data: [
        ...thisContent.data,
        {
          title: "",
          description: "",
          character: {
            src: "",
          },
        },
      ],
    };
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

  const deleteCurrentNumberingTextItem = (index: number) => {
    const updatedData = thisContent.data.filter((_, i) => i !== index);
    updateCharacterCardData(updatedData);
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

  const getThisContentImageSrc = useCallback(
    (index: number) => {
      console.log("응애", thisContent.data?.[index]?.character.src);
      return thisContent.data?.[index]?.character.src ?? "";
    },
    [thisContent.data],
  );

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
    >
      <TrainingWrapper className="training-wrapper">
        {/* TODO: key설명 - training-end 클래스 추가되면 높이 변경, 버튼 추가 */}
        <AddButton onClick={addNumberingTextItem}>학습목표 추가</AddButton>
        <div
          className="training-list-wrap training-end"
          onClick={(e) => setFocusedId(e, content.id)}
        >
          {/* 반복영역 */}
          {thisContent.data.map((item, index) => {
            return (
              <div className="training-create-wrap" key={index}>
                <div className="training-list">
                  <ObjectDeleteButton
                    onClick={() => deleteCurrentNumberingTextItem(index)}
                  />
                  <div className="gradi-wrap">
                    <div className="gradi-conts-wrap">
                      <ImageThumb className="img-wrap">
                        {item.character.src ? (
                          <img src={item.character.src} alt="" />
                        ) : (
                          <img src={ImageIcon} alt="" className="empty-image" />
                        )}
                      </ImageThumb>

                      <div
                        onClick={fucusTextEditor(index, "title")}
                        className="title"
                      >
                        <TextEditorViewer
                          isFocused={isTextEditorFocused(
                            isFocused,
                            index,
                            "title",
                          )}
                          setText={(text) => setText(index, "title", text)}
                          text={getText(index, "title")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="white-wrap">
                    <div
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
                    </div>
                    <div className="btns-wrap">
                      <ComponentButtonRadiFillMain text="학습 요약" />
                    </div>
                  </div>
                </div>
                <UrlInputWrapper
                  typeText="이미지"
                  onSubmit={setImageUrl(index)}
                />
              </div>
            );
          })}

          {/* end 반복영역 */}
        </div>
      </TrainingWrapper>
    </ContentCreatorLayout>
  );
};

export default CharacterCardListCreate;
