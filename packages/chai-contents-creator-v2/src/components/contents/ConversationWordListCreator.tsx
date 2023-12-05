import styled from "@emotion/styled";
import {
  ComponentButtonRoundArrow,
  ConversationWordListContentData,
  ImgCharacterComponent,
  useToast,
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
  height: auto !important;
`;

const deleteButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #999999;
`;

const TitleInput = styled.input`
  background: none !important;
  font-size: 2.4vmin !important;
  &::placeholder {
    opacity: 0.6;
  }
`;

const EditorWrapper = styled.div`
  width: 100%;
`;

const ConversationWordListCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  isEditBtn,
  deleteContent,
}: DraggableContentCommonProps) => {
  const thisContent = content as ConversationWordListContentData;
  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const { addToast } = useToast();

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

  const setTitle = useCallback(
    (text: string) => {
      const updatedData = {
        ...thisContent.data,
        title: text,
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
      if (thisContent.data.words.length === 1) {
        addToast("최소 1개이상 입력하셔야 합니다.", "info");
        return;
      }

      const newContent: ConversationWordListContentData =
        cloneDeep(thisContent);
      newContent.data.words.splice(listIndex, 1);
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [currentSlide.id, position, thisContent, updateContent, addToast],
  );

  const vocaLists = useMemo(() => {
    return thisContent.data.words.map((word, wordIndex) => {
      return (
        <VacaList className="voca-list" key={wordIndex}>
          <ObjectDeleteButton
            onClick={() => deleteWord(wordIndex)}
            customCSS={deleteButtonStyle}
          />

          <EditorWrapper onClick={() => fucusTextEditor(wordIndex)}>
            <TextEditorViewer
              text={word.text}
              setText={(text) => setText(wordIndex, text)}
              isFocused={isTextEditorFocused(wordIndex)}
              handleSubmitTextOnBlur={() => fucusTextEditor(-1)}
            />
          </EditorWrapper>

          <AudioWrapper
            onSubmit={setAudio(wordIndex)}
            defaultText={thisContent.data.words[wordIndex].audio?.src}
          />
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
      isEditBtn={isEditBtn}
      align="center"
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <div className="flex-wrap">
        <AddButton onClick={addWord}>단어 추가</AddButton>
        <ConversationWordListWrapper
          className="voca-note-container active"
          onClick={(e) => setFocusedId(e, content.id)}
        >
          <div className="voca-header">
            <ImgCharacterComponent
              characterType="kkungiHello"
              characterAlt="꿍이윙크인사"
            />
            <h3 className="voca-title">
              <TitleInput
                type="text"
                className="name"
                placeholder="제목 입력"
                onBlur={(e) => {
                  const target = e.target as HTMLInputElement;
                  setTitle(target.value);
                }}
                defaultValue={thisContent.data.title}
              />
            </h3>
            <ComponentButtonRoundArrow />
          </div>
          <ul className="voca-list-wrap">{vocaLists}</ul>
        </ConversationWordListWrapper>
      </div>
    </ContentCreatorLayout>
  );
};

export default ConversationWordListCreator;
