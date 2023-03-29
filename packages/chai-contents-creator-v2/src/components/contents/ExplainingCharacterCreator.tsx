import styled from "@emotion/styled";
import ImageThumb from "../atoms/ImageThumb";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconTail from "chai-ui-v2/dist/assets/images/icon/icon_bubble_tail.svg";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { ExplainingCharacterContentData } from "chai-ui-v2";
import { useCallback, useEffect, useState } from "react";

const ExplainingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .url-wrapper {
    margin-top: unset;
  }
`;
const ExplainingTextWrapper = styled.div`
  display: flex;
  & > img {
    width: 120px;
    height: 120px;
    background-size: 36px 36px;
    margin-right: 28px;
  }
`;

const ExplainingTextListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExplainingText = styled.div`
  position: relative;
  padding: 16px 30px;
  border-radius: 60px;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  width: 600px;
  &::before {
    content: "";
    background-image: url("${iconTail}");
    background-size: 100% 100%;
    background-position: left center;
    position: absolute;
    top: 50%;
    left: -12px;
    width: 23px;
    height: 24px;
    transform: translateY(-50%);
  }
`;

type ColumnIndex = "text" | "explain";

const ExplainingCharacterCreator = ({
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
  const thisContent = content as ExplainingCharacterContentData;
  const url = thisContent.data.character.src;

  const [focusedColumnIndex, setFocusedColumnIndex] = useState<ColumnIndex>();

  const fucusTextEditor = useCallback(
    (columnIndex: ColumnIndex) => () => {
      setFocusedColumnIndex(columnIndex);
    },
    [],
  );

  const resetFocusedTextEditorIndex = useCallback(() => {
    setFocusedColumnIndex(undefined);
  }, []);

  useEffect(() => {
    window.addEventListener("click", resetFocusedTextEditorIndex);
    return () => {
      window.removeEventListener("click", resetFocusedTextEditorIndex);
    };
  }, [resetFocusedTextEditorIndex]);

  const isTextEditorFocused = useCallback(
    (isCurrentComponentFocused: boolean, columnIndex: ColumnIndex) => {
      return isCurrentComponentFocused && columnIndex === focusedColumnIndex;
    },
    [focusedColumnIndex],
  );

  const updateExplainingCharacterData = (
    explainingCharacterData: ExplainingCharacterContentData["data"],
  ) => {
    updateContent(
      currentSlide.id,
      content.id,
      position,
      getCurrentContent(explainingCharacterData),
    ); // total content 업데이트
  };

  const getCurrentContent = (
    explainingCharacterData: ExplainingCharacterContentData["data"],
  ): ExplainingCharacterContentData => {
    return {
      ...thisContent,
      data: explainingCharacterData,
    };
  };

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
  const getText = (columnIndex: "text" | "explain") => {
    return thisContent.data[columnIndex] ?? "";
  };

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = (columnIndex: "text" | "explain", text: string) => {
    const updateData = {
      ...thisContent.data,
      [columnIndex]: text,
    };
    updateExplainingCharacterData(updateData);
  };

  const setUrl = (url: string) => {
    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        character: {
          src: url,
        },
      },
    };
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
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <ExplainingWrapper>
        <UrlInputWrapper typeText="이미지" onSubmit={setUrl}></UrlInputWrapper>
        <ExplainingTextWrapper onClick={(e) => setFocusedId(e, content.id)}>
          {url ? (
            <img src={thisContent.data.character.src} alt="" />
          ) : (
            <ImageThumb />
          )}
          <ExplainingTextListWrapper>
            <ExplainingText
              className="first-content"
              onClick={fucusTextEditor("text")}
            >
              <TextEditorViewer
                isFocused={isTextEditorFocused(isFocused, "text")}
                setText={(text) => setText("text", text)}
                text={getText("text")}
              />
            </ExplainingText>
            <ExplainingText
              className="second-content"
              onClick={fucusTextEditor("explain")}
            >
              <TextEditorViewer
                isFocused={isTextEditorFocused(isFocused, "explain")}
                setText={(text) => setText("explain", text)}
                text={getText("explain")}
              />
            </ExplainingText>
          </ExplainingTextListWrapper>
        </ExplainingTextWrapper>
      </ExplainingWrapper>
    </ContentCreatorLayout>
  );
};

export default ExplainingCharacterCreator;
