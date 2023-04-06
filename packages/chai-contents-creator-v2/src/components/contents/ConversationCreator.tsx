import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ConversationContentData,
  TemplateConversationData,
  TemplateConversationRepeatData,
  TemplateConversationToggleData,
  vh,
  vw,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import TogglesWrapper from "../atoms/TogglesWrapper";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import SpeakingTimeInputWrapper from "../molecules/SpeakingTimeInputWrapper";
import TextEditorViewer from "../molecules/TextEditorViewer";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import { v4 as uuidV4 } from "uuid";

export const ConversationWrapper = styled.ul``;

export const CharacterNameInput = styled.input`
  background: none !important;
  font-size: ${vw(25)} !important;

  &::placeholder {
    opacity: 0.6;
  }
`;

export const ConversationList = styled.li`
  width: 100%;
  padding: ${vh(16)} ${vw(16)};
  border-radius: 8px;
  background-color: #f6f4ff;
  border: 1px solid #d9d0ff;
  position: relative;
`;

export const deleteButtonStyle = css`
  position: absolute;
  right: 10px;
`;

type TextType = "text" | "pronunciation" | "meaning";

const ConversationCreator = ({
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
  templateType,
}: DraggableContentCommonProps) => {
  const thisTemplateType = templateType as
    | TemplateConversationData["type"]
    | TemplateConversationToggleData["type"]
    | TemplateConversationRepeatData["type"];
  const thisContent = content as ConversationContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const [focusedColumnIndex, setFocusedColumnIndex] = useState<TextType>();

  const focusTextEditor = useCallback(
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
      toggleSentenceListData: ConversationContentData["data"],
    ): ConversationContentData => {
      return {
        ...thisContent,
        data: toggleSentenceListData,
      };
    },
    [thisContent],
  );

  const updateConversationListData = useCallback(
    (toggleSentenceListData: ConversationContentData["data"]) => {
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
      updateConversationListData(updatedData);
    },
    [thisContent.data, updateConversationListData],
  );

  const setImage = useCallback(
    (rowIndex: number) => (url: string) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            character: {
              ...item.character,
              src: url,
            },
          };
        }
        return item;
      });
      updateConversationListData(updatedData);
    },
    [thisContent.data, updateConversationListData],
  );

  const setName = useCallback(
    (rowIndex: number, text: string) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            character: {
              ...item.character,
              name: text,
            },
          };
        }
        return item;
      });
      updateConversationListData(updatedData);
    },
    [thisContent.data, updateConversationListData],
  );

  const setAudio = useCallback(
    (rowIndex: number) => (url: string) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            audio: {
              src: url,
            },
          };
        }
        return item;
      });
      updateConversationListData(updatedData);
    },
    [thisContent.data, updateConversationListData],
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

  const deleteConversation = useCallback(
    (listIndex: number) => () => {
      if (thisContent.data.length === 1) {
        alert("최소 1개이상 입력하셔야 합니다.");
        return;
      }

      const newContent = cloneDeep(thisContent);
      const removeIndex = newContent.data.findIndex((v, i) => i === listIndex);
      newContent.data.splice(removeIndex, 1);
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [thisContent, currentSlide.id, updateContent, position],
  );

  const handleSubmitSpeakingTime = useCallback(
    (rowIndex: number) => (time: number) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            speakingTime: time,
          };
        }
        return item;
      });
      updateConversationListData(updatedData);
    },
    [thisContent, updateConversationListData],
  );

  const conversationLists = useMemo(() => {
    return thisContent.data.map((list, listIndex) => {
      return (
        <ConversationList className="conversation-wrap" key={uuidV4()}>
          <ObjectDeleteButton
            onClick={deleteConversation(listIndex)}
            customCSS={deleteButtonStyle}
          />

          <div className="img-grp">
            <div className="img-wrap">
              <div className="img-round">
                <button className="btn-profile">
                  <img src={list.character.src} alt={list.character.name} />
                </button>
              </div>
            </div>
            <CharacterNameInput
              type="text"
              className="name"
              placeholder="화자 이름"
              onBlur={(e) => {
                const target = e.target as HTMLInputElement;
                setName(listIndex, target.value);
              }}
              defaultValue={thisContent.data[listIndex].character.name}
            />
          </div>
          <div className="txt-wrap">
            <UrlInputWrapper
              typeText="이미지"
              onSubmit={setImage(listIndex)}
              defaultText={thisContent.data[listIndex].character.src}
            />
            <UrlInputWrapper
              typeText="오디오"
              onSubmit={setAudio(listIndex)}
              defaultText={thisContent.data[listIndex].audio?.src}
            />
            <div
              className="chinese"
              onClick={focusTextEditor(listIndex, "text")}
            >
              <TextEditorViewer
                setText={(text) => setText(listIndex, "text", text)}
                text={getText(listIndex, "text")}
                isFocused={isTextEditorFocused(isFocused, listIndex, "text")}
                defaultText="한문을 입력해주세요"
              />
            </div>
            <div
              className="pinyin"
              onClick={focusTextEditor(listIndex, "pronunciation")}
            >
              <TextEditorViewer
                setText={(text) => setText(listIndex, "pronunciation", text)}
                text={getText(listIndex, "pronunciation")}
                isFocused={isTextEditorFocused(
                  isFocused,
                  listIndex,
                  "pronunciation",
                )}
                defaultText="한어병음을 입력해주세요"
              />
            </div>
            <div
              className="mean"
              onClick={focusTextEditor(listIndex, "meaning")}
            >
              <TextEditorViewer
                setText={(text) => setText(listIndex, "meaning", text)}
                text={getText(listIndex, "meaning")}
                isFocused={isTextEditorFocused(isFocused, listIndex, "meaning")}
                defaultText="뜻을 입력해주세요"
              />
            </div>
            {thisTemplateType === "TemplateConversationRepeat" && (
              <SpeakingTimeInputWrapper
                onSubmit={handleSubmitSpeakingTime(listIndex)}
              />
            )}
          </div>
        </ConversationList>
      );
    });
  }, [
    thisContent,
    focusTextEditor,
    getText,
    isFocused,
    isTextEditorFocused,
    setText,
    setImage,
    setAudio,
    setName,
    deleteConversation,
    thisTemplateType,
    handleSubmitSpeakingTime,
  ]);

  const addConversation = useCallback(() => {
    const newContent = cloneDeep(thisContent);
    newContent.data.push({
      text: "",
      pronunciation: "",
      meaning: "",
      character: {
        name: "",
        src: "",
      },
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
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <div className="flex-wrap">
        {thisTemplateType === "TemplateConversationToggle" && (
          <TogglesWrapper contents={thisContent} />
        )}
        <AddButton onClick={addConversation}>대화 추가</AddButton>
        <ConversationWrapper
          className="conversation-wrapper"
          onClick={(e) => setFocusedId(e, content.id)}
        >
          {conversationLists}
        </ConversationWrapper>
      </div>
    </ContentCreatorLayout>
  );
};

export default ConversationCreator;
