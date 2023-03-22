import styled from "@emotion/styled";
import {
  ComponentButtonRoundArrow,
  ConversationWordListContentData,
  ImgCharacterComponent,
  vw,
} from "chai-ui-v2";
import React, { useCallback, useMemo, useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AudioWrapper from "../molecules/AudioWrapper";
import TextEditorViewer from "../molecules/TextEditorViewer";
import AddButton from "../atoms/AddButton";
import { cloneDeep } from "lodash";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { css } from "@emotion/react";

const VacaList = styled.li`
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const ConversationWordListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${vw(640)};
  height: auto !important;
`;

const deleteButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #999999;
`;

const ConversationWordListCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  deleteContent,
}: DraggableContentCommonProps) => {
  const thisContent = content as ConversationWordListContentData;
  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();

  const fucusTextEditor = useCallback((wordIndex: number) => {
    setFocusedTextEditorIndex(wordIndex);
  }, []);

  const isTextEditorFocused = useCallback(
    (wordIndex: number) => {
      return isFocused && focusedTextEditorIndex === wordIndex;
    },
    [focusedTextEditorIndex, isFocused],
  );

  const getCurrentContent = useCallback(
    (
      conversationWordListData: ConversationWordListContentData["data"],
    ): ConversationWordListContentData => {
      return {
        ...thisContent,
        data: conversationWordListData,
      };
    },
    [thisContent],
  );

  const updateConversationWordListData = useCallback(
    (conversationWordListData: ConversationWordListContentData["data"]) => {
      updateContent(
        currentSlide.id,
        content.id,
        position,
        getCurrentContent(conversationWordListData),
      ); // total content 업데이트
    },
    [content.id, currentSlide.id, getCurrentContent, position, updateContent],
  );

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = useCallback(
    (rowIndex: number, text: string) => {
      const updatedData = {
        ...thisContent.data,
        words: thisContent.data.words.map((item, index) => {
          if (index === rowIndex) {
            return {
              ...item,
              text: text,
            };
          }
          return item;
        }),
      };
      updateConversationWordListData(updatedData);
    },
    [thisContent, updateConversationWordListData],
  );

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setAudio = useCallback(
    (rowIndex: number) => (url: string) => {
      const updatedData = {
        ...thisContent.data,
        words: thisContent.data.words.map((item, index) => {
          if (index === rowIndex) {
            return {
              ...item,
              audio: {
                src: url,
              },
            };
          }
          return item;
        }),
      };
      updateConversationWordListData(updatedData);
    },
    [thisContent, updateConversationWordListData],
  );

  const deleteWord = useCallback(
    (listIndex: number) => {
      const newContent: ConversationWordListContentData =
        cloneDeep(thisContent);
      newContent.data.words.splice(listIndex, 1);
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [currentSlide.id, position, thisContent, updateContent],
  );

  const vocaLists = useMemo(() => {
    return thisContent.data.words.map((word, wordIndex) => {
      return (
        <VacaList className="voca-list" key={wordIndex}>
          <ObjectDeleteButton
            onClick={() => deleteWord(wordIndex)}
            customCSS={deleteButtonStyle}
          />
          <div onClick={() => fucusTextEditor(wordIndex)}>
            <TextEditorViewer
              text={word.text}
              setText={(text) => setText(wordIndex, text)}
              isFocused={isTextEditorFocused(wordIndex)}
              handleSubmitTextOnBlur={() => fucusTextEditor(-1)}
            />
          </div>

          <AudioWrapper onSubmit={setAudio(wordIndex)} />
        </VacaList>
      );
    });
  }, [
    fucusTextEditor,
    isTextEditorFocused,
    thisContent,
    setText,
    setAudio,
    deleteWord,
  ]);

  const addWord = useCallback(() => {
    const newContent = cloneDeep(thisContent);
    newContent.data.words.push({
      text: "",
      audio: {
        src: "",
      },
    });
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  }, [currentSlide.id, thisContent, updateContent, position]);

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      align="center"
    >
      <div className="flex-wrap">
        <AddButton onClick={addWord}>단어 추가</AddButton>
        <ConversationWordListWrapper
          className="voca-note-container active"
          onClick={(e) => setFocusedId(e, content.id)}
        >
          <h3 className="voca-title">
            회화 단어 목록
            <ImgCharacterComponent
              characterType="kkungiSmile"
              characterAlt="꿍이스마일"
            />
            <ComponentButtonRoundArrow />
          </h3>
          <ul className="voca-list-wrap">{vocaLists}</ul>
        </ConversationWordListWrapper>
      </div>
    </ContentCreatorLayout>
  );
};

export default ConversationWordListCreator;