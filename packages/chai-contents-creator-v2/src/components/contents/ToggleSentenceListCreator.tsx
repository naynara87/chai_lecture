import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AddButton from "../atoms/AddButton";
import TogglesWrapper from "../atoms/TogglesWrapper";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { colorPalette, ToggleSentenceListContentData } from "chai-ui-v2";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";

const ToggleSentenceWrapper = styled.div``;

const SentenceWrap = styled.div`
  position: relative;
  width: 500px;
  margin-top: 10px;
  padding: 16px;
  border: 1px solid ${colorPalette.subpurple};
  border-radius: 10px;
  background-color: ${colorPalette.sublightpurple};

  .btn-delete {
    z-index: 1;
    position: absolute;
    top: 10px;
    left: auto;
    right: 10px;
  }

  .text-lg {
    font-weight: 600;
    font-size: 22px;
    word-break: break-all;
  }

  .text {
    margin-top: 15px;
    font-size: 14px;
  }
`;

type TextType = "text" | "pronunciation" | "meaning";

const ToggleSentenceListCreator = ({
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
  const thisContent = content as ToggleSentenceListContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const [focusedColumnIndex, setFocusedColumnIndex] = useState<TextType>();

  const fucusTextEditor = useCallback(
    (sentenceListIndex: number, columnIndex: TextType) => () => {
      setFocusedTextEditorIndex(sentenceListIndex);
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

  const getCurrentContent = useCallback(
    (
      toggleSentenceListData: ToggleSentenceListContentData["data"],
    ): ToggleSentenceListContentData => {
      return {
        ...thisContent,
        data: toggleSentenceListData,
      };
    },
    [thisContent],
  );

  const updateSentenceListData = useCallback(
    (toggleSentenceListData: ToggleSentenceListContentData["data"]) => {
      updateContent(
        currentSlide.id,
        content.id,
        position,
        getCurrentContent(toggleSentenceListData),
      ); // total content 업데이트
    },
    [content.id, currentSlide.id, getCurrentContent, position, updateContent],
  );

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = useCallback(
    (rowIndex: number, columnIndex: TextType, text: string) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            [columnIndex]: text,
          };
        }
        return item;
      });
      updateSentenceListData(updatedData);
    },
    [thisContent.data, updateSentenceListData],
  );

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
  const getText = useCallback(
    (rowIndex: number, columnIndex: TextType) => {
      return thisContent.data[rowIndex][columnIndex] ?? "";
    },
    [thisContent.data],
  );

  const isTextEditorFocused = useCallback(
    (
      isCurrentComponentFocused: boolean,
      sentenceListIndex: number,
      columnIndex: TextType,
    ) => {
      return (
        isCurrentComponentFocused &&
        focusedTextEditorIndex === sentenceListIndex &&
        columnIndex === focusedColumnIndex
      );
    },
    [focusedTextEditorIndex, focusedColumnIndex],
  );

  const addSentence = useCallback(() => {
    const newContent = {
      ...thisContent,
      data: [
        ...thisContent.data,
        {
          text: "",
          pronunciation: "",
          meaning: "",
        },
      ],
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  }, [thisContent, updateContent, currentSlide.id, content.id, position]);

  const deleteSentence = useCallback(
    (sentenceListIndex: number) => {
      const updatedData = thisContent.data.filter(
        (_, i) => i !== sentenceListIndex,
      );
      updateSentenceListData(updatedData);
    },
    [thisContent.data, updateSentenceListData],
  );

  const sentences = useMemo(() => {
    return thisContent.data.map((content, contentIndex) => {
      return (
        <SentenceWrap className="sentence-wrap">
          <ObjectDeleteButton onClick={() => deleteSentence(contentIndex)} />
          <p
            className="text-lg"
            onClick={fucusTextEditor(contentIndex, "text")}
          >
            <TextEditorViewer
              setText={(text) => setText(contentIndex, "text", text)}
              text={getText(contentIndex, "text")}
              isFocused={isTextEditorFocused(isFocused, contentIndex, "text")}
              defaultText="한문을 입력해주세요"
            />
          </p>
          <p
            className="text"
            onClick={fucusTextEditor(contentIndex, "pronunciation")}
          >
            <TextEditorViewer
              setText={(text) => setText(contentIndex, "pronunciation", text)}
              text={getText(contentIndex, "pronunciation")}
              isFocused={isTextEditorFocused(
                isFocused,
                contentIndex,
                "pronunciation",
              )}
              defaultText="한어병음을 입력해주세요"
            />
          </p>
          <p
            className="text"
            onClick={fucusTextEditor(contentIndex, "meaning")}
          >
            <TextEditorViewer
              setText={(text) => setText(contentIndex, "meaning", text)}
              text={getText(contentIndex, "meaning")}
              isFocused={isTextEditorFocused(
                isFocused,
                contentIndex,
                "meaning",
              )}
              defaultText="뜻을 입력해주세요"
            />
          </p>
        </SentenceWrap>
      );
    });
  }, [
    thisContent,
    fucusTextEditor,
    getText,
    isFocused,
    isTextEditorFocused,
    setText,
    deleteSentence,
  ]);

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
      <ToggleSentenceWrapper
        className="toggle-sentence-wrapper"
        onClick={(e) => setFocusedId(e, content.id)}
      >
        <TogglesWrapper contents={thisContent} />
        <AddButton onClick={addSentence}>문장 추가</AddButton>
        {sentences}
      </ToggleSentenceWrapper>
    </ContentCreatorLayout>
  );
};

export default ToggleSentenceListCreator;
