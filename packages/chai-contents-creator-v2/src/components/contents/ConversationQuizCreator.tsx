import styled from "@emotion/styled";
import { ConversationQuizContentData, useToast } from "chai-ui-v2";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import TextEditorViewer from "../molecules/TextEditorViewer";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import {
  CharacterNameInput,
  ConversationList,
  ConversationWrapper,
  deleteButtonStyle,
} from "./ConversationCreator";
import { AnswerCheckText } from "./MultiChoiceCreator";
import useSafeKey from "../../hooks/useSafeKey";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";

const ImgRound = styled.div`
  .btn-profile {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const AnswerBoxWrap = styled.div`
  display: flex;
  gap: 2vmin;
  margin-top: 1vmin;
  .inp-grp {
    flex: 1;
  }
`;

const AnswerBox = styled.div`
  padding: 2vmin;
  border: 0.2vmin solid #c9c9c9;
  background-color: #fff;
  border-radius: 2vmin;
  font-size: 2vmin;

  &:first-of-type {
    margin-right: 1vmin;
  }
`;

const AnswerInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid #c9c9c9;
  border-radius: 50%;
  margin-right: 5px;
  width: 1em;
  height: 1em;
  position: relative;

  &:checked {
    border-color: #7686d4;
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7686d4;
  }
`;

type TextType = "text" | "pronunciation" | "meaning";
type ChoiceType = "choice0" | "choice1";

const ConversationQuizCreator = ({
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
  isEditBtn,
  templateType,
}: DraggableContentCommonProps) => {
  const thisContent = content as ConversationQuizContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const [focusedColumnIndex, setFocusedColumnIndex] = useState<
    TextType | ChoiceType
  >();
  const { addToast } = useToast();

  const focusTextEditor = useCallback(
    (sentenceListIndex: number, columnIndex: TextType | ChoiceType) => () => {
      setFocusedTextEditorIndex(sentenceListIndex);
      setFocusedColumnIndex(columnIndex);
    },
    [],
  );

  const isTextEditorFocused = useCallback(
    (
      isCurrentComponentFocused: boolean,
      sentenceListIndex: number,
      columnIndex: TextType | ChoiceType,
    ) => {
      return (
        isCurrentComponentFocused &&
        focusedTextEditorIndex === sentenceListIndex &&
        columnIndex === focusedColumnIndex
      );
    },
    [focusedTextEditorIndex, focusedColumnIndex],
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
      conversationQuizData: ConversationQuizContentData["data"],
    ): ConversationQuizContentData => {
      return {
        ...thisContent,
        data: conversationQuizData,
      };
    },
    [thisContent],
  );

  const updateConversationListData = useCallback(
    (conversationQuizData: ConversationQuizContentData["data"]) => {
      updateContent(
        currentSlide.id,
        content.id,
        position,
        getCurrentContent(conversationQuizData),
      ); // total content 업데이트
    },
    [content.id, currentSlide.id, getCurrentContent, position, updateContent],
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

  const deleteConversation = useCallback(
    (listIndex: number) => {
      if (thisContent.data.length === 1) {
        addToast("최소 1개이상 입력하셔야 합니다.", "info");
        return;
      }

      const newContent = cloneDeep(thisContent);
      const removeIndex = newContent.data.findIndex((v, i) => i === listIndex);
      newContent.data.splice(removeIndex, 1);
      updateContent(currentSlide.id, thisContent.id, position, newContent);
    },
    [thisContent, currentSlide.id, updateContent, position, addToast],
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

  const setChoiceText = useCallback(
    (rowIndex: number, columnIndex: ChoiceType, text: string) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            choice: item.choice.map((_choice, _choiceIndex) => {
              if (_choiceIndex === parseInt(columnIndex.slice(-1))) {
                return {
                  ..._choice,
                  text: text,
                };
              }
              return _choice;
            }),
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

  const getChoiceText = useCallback(
    (rowIndex: number, columnIndex: ChoiceType) => {
      return (
        thisContent.data[rowIndex].choice[parseInt(columnIndex.slice(-1))]
          .text ?? ""
      );
    },
    [thisContent.data],
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

  const setAnswer = useCallback(
    (rowIndex: number, answerIndex: number) => {
      const updatedData = thisContent.data.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...item,
            choice: item.choice.map((_choice, _choiceIndex) => {
              if (_choiceIndex === answerIndex) {
                return {
                  ..._choice,
                  isAnswer: true,
                };
              }
              return {
                ..._choice,
                isAnswer: false,
              };
            }),
          };
        }
        return item;
      });
      updateConversationListData(updatedData);
    },
    [thisContent, updateConversationListData],
  );

  const { addKeyByArrayLength, deleteKeyByIndex, getKeyByIndex } = useSafeKey(
    thisContent.data,
  );

  const conversationQuizList = useMemo(() => {
    return thisContent.data.map((content, contentIndex) => {
      return (
        <ConversationList
          className="conversation-wrap"
          key={getKeyByIndex(contentIndex)}
        >
          <ObjectDeleteButton
            onClick={() => {
              deleteConversation(contentIndex);
              deleteKeyByIndex(contentIndex);
            }}
            customCSS={deleteButtonStyle}
          />

          <div className="img-grp">
            <div className="img-wrap">
              <ImgRound className="img-round">
                <button className="btn-profile">
                  <img
                    src={content.character.src || ImgProfileDefault}
                    alt={content.character.name}
                  />
                </button>
              </ImgRound>
            </div>
            <CharacterNameInput
              type="text"
              className="name"
              placeholder="화자 이름"
              onBlur={(e) => {
                const target = e.target as HTMLInputElement;
                setName(contentIndex, target.value);
              }}
              defaultValue={thisContent.data[contentIndex].character.name}
            />
          </div>
          <div className="txt-wrap">
            <UrlInputWrapper
              typeText="이미지"
              onSubmit={setImage(contentIndex)}
              defaultText={thisContent.data[contentIndex].character.src}
            />
            <UrlInputWrapper
              typeText="오디오"
              onSubmit={setAudio(contentIndex)}
              defaultText={thisContent.data[contentIndex].audio?.src}
            />
            <div
              className="chinese"
              onClick={focusTextEditor(contentIndex, "text")}
            >
              <TextEditorViewer
                setText={(text) => setText(contentIndex, "text", text)}
                text={getText(contentIndex, "text")}
                isFocused={isTextEditorFocused(isFocused, contentIndex, "text")}
                defaultText="한문을 입력해주세요"
              />
            </div>
            <div
              className="pinyin"
              onClick={focusTextEditor(contentIndex, "pronunciation")}
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
            </div>
            <div
              className="mean"
              onClick={focusTextEditor(contentIndex, "meaning")}
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
            </div>
            <AnswerBoxWrap>
              {content.choice.map((choice, choiceIndex) => {
                return (
                  <div className="flex-wrap inp-grp" key={choiceIndex}>
                    <AnswerBox
                      onClick={focusTextEditor(
                        contentIndex,
                        choiceIndex === 0 ? "choice0" : "choice1",
                      )}
                    >
                      <TextEditorViewer
                        setText={(text) =>
                          setChoiceText(
                            contentIndex,
                            choiceIndex === 0 ? "choice0" : "choice1",
                            text,
                          )
                        }
                        text={getChoiceText(
                          contentIndex,
                          choiceIndex === 0 ? "choice0" : "choice1",
                        )}
                        isFocused={isTextEditorFocused(
                          isFocused,
                          contentIndex,
                          choiceIndex === 0 ? "choice0" : "choice1",
                        )}
                        defaultText="텍스트를 입력해주세요"
                      />
                    </AnswerBox>
                    <AnswerInput
                      type="radio"
                      name={`answerCheck_${contentIndex}_${thisContent.id}`}
                      id={`answerCheck_${contentIndex}_${choiceIndex}_${thisContent.id}`}
                      onClick={() => setAnswer(contentIndex, choiceIndex)}
                      checked={choice.isAnswer}
                    />
                    <label
                      htmlFor={`answerCheck_${contentIndex}_${choiceIndex}_${thisContent.id}`}
                      onClick={() => setAnswer(contentIndex, choiceIndex)}
                    >
                      <AnswerCheckText className="text">정답</AnswerCheckText>
                    </label>
                  </div>
                );
              })}
            </AnswerBoxWrap>
          </div>
        </ConversationList>
      );
    });
  }, [
    thisContent,
    deleteConversation,
    setName,
    focusTextEditor,
    getText,
    isFocused,
    isTextEditorFocused,
    setText,
    getChoiceText,
    setAnswer,
    setAudio,
    setChoiceText,
    setImage,
    deleteKeyByIndex,
    getKeyByIndex,
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
      choice: [
        {
          text: "",
          isAnswer: false,
        },
        {
          text: "",
          isAnswer: false,
        },
      ],
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
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <div className="flex-wrap">
        <AddButton
          onClick={() => {
            addConversation();
            addKeyByArrayLength(thisContent.data.length);
          }}
        >
          대화 추가
        </AddButton>
        <ConversationWrapper
          className="conversation-wrapper"
          onClick={(e) => setFocusedId(e, content.id)}
        >
          {conversationQuizList}
        </ConversationWrapper>
      </div>
    </ContentCreatorLayout>
  );
};

export default ConversationQuizCreator;
