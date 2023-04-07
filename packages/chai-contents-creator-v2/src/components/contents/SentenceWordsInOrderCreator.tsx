import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import Button from "../atoms/Button";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import CharacterInputWrapper from "../molecules/ChracterInputWrapper";
import {
  QuizPopupModalContentData,
  QuizSentenceContentData,
  useToast,
} from "chai-ui-v2";
import { useCallback, useMemo, useState } from "react";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import { cloneDeep } from "lodash";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ModalSolution from "../molecules/modal/ModalSolution";

const LayerEditButtonWrapper = styled.div`
  margin-bottom: 8px;
`;
const AddButtonWrapper = styled.div`
  & button:not(:last-child) {
    margin-right: 8px;
  }
`;

const CharactersEditWrapper = styled.div``;

const QuestionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const QuestionTextBox = styled.p`
  padding: 13px 24px;
  color: #666666;
  background-color: #f5f5f5;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 8px;
  border: 1px solid #c9c9c9;
  margin-bottom: 10px;
`;

const QuestionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SentenceWordsInOrderCreator = ({
  content,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  isEditBtn,
  deleteContent,
  updateContentToSentenceInOrderTemplate,
  isFocused,
  setFocusedId,
  copyContent,
  pasteContent,
}: DraggableContentCommonProps) => {
  const thisContent = content as QuizSentenceContentData;

  const [characterIndex, setCharacterIndex] = useState(0);
  const [focusedTextEditorId, setFocusedTextEditorId] = useState<string>();
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [solutionType, setSolutionType] = useState<"correct" | "incorrect">();

  const { addToast } = useToast();

  const focusTextEditor = useCallback(
    (sentenceId: string) => () => {
      setFocusedTextEditorId(sentenceId);
    },
    [],
  );

  const isTextEditorFocused = useCallback(
    (isCurrentComponentFocused: boolean, sentenceId: string) => {
      return isCurrentComponentFocused && focusedTextEditorId === sentenceId;
    },
    [focusedTextEditorId],
  );

  const resetFocusedTextEditorIndex = useCallback(() => {
    setFocusedTextEditorId(undefined);
  }, []);

  const setImage = useCallback(
    (src: string, characterIndex: number) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          characters: thisContent.data.characters.map(
            (_character, _characterIndex) => {
              if (characterIndex === _characterIndex) {
                return {
                  ..._character,
                  src,
                };
              }
              return _character;
            },
          ),
        },
      };
      updateContentToSentenceInOrderTemplate &&
        updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToSentenceInOrderTemplate, currentSlide.id],
  );

  const setName = useCallback(
    (characterIndex: number) => (name: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          characters: thisContent.data.characters.map(
            (_character, _characterIndex) => {
              if (characterIndex === _characterIndex) {
                return {
                  ..._character,
                  name,
                };
              }
              return _character;
            },
          ),
        },
      };
      updateContentToSentenceInOrderTemplate &&
        updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToSentenceInOrderTemplate, currentSlide.id],
  );

  const setText = useCallback(
    (characterIndex: number, sentenceIndex: number, text: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          characters: thisContent.data.characters.map(
            (_character, _characterIndex) => {
              if (characterIndex === _characterIndex) {
                return {
                  ..._character,
                  sentences: _character.sentences.map(
                    (_sentence, _sentenceIndex) => {
                      if (sentenceIndex === _sentenceIndex) {
                        return {
                          ..._sentence,
                          sentence: text,
                        };
                      }
                      return _sentence;
                    },
                  ),
                };
              }
              return _character;
            },
          ),
        },
      };
      updateContentToSentenceInOrderTemplate &&
        updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToSentenceInOrderTemplate, currentSlide.id],
  );

  const getText = useCallback(
    (characterIndex: number, sentenceIndex: number) => {
      return (
        thisContent.data.characters[characterIndex].sentences[sentenceIndex]
          .sentence ?? ""
      );
    },
    [thisContent.data],
  );

  const setAnswerIndex = useCallback((contentData: QuizSentenceContentData) => {
    let blankIndex = -1;
    const newContent = {
      ...contentData,
      data: {
        ...contentData.data,
        characters: contentData.data.characters.map((_character) => {
          return {
            ..._character,
            sentences: _character.sentences.map((_sentence) => {
              if (_sentence.isChoice) {
                blankIndex++;
                return {
                  ..._sentence,
                  answerIndex: blankIndex,
                };
              }
              return _sentence;
            }),
          };
        }),
      },
    };
    return newContent;
  }, []);

  const setIsChoice = useCallback(
    (
      characterIndex: number,
      sentenceIndex: number,
      currentIsChoice: boolean,
    ) => {
      const updatedContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          characters: thisContent.data.characters.map(
            (_character, _characterIndex) => {
              if (characterIndex === _characterIndex) {
                return {
                  ..._character,
                  sentences: _character.sentences.map(
                    (_sentence, _sentenceIndex) => {
                      if (sentenceIndex === _sentenceIndex) {
                        return {
                          ..._sentence,
                          isChoice: currentIsChoice,
                        };
                      }
                      return _sentence;
                    },
                  ),
                };
              }
              return _character;
            },
          ),
        },
      };
      const newContent = setAnswerIndex(updatedContent);
      updateContentToSentenceInOrderTemplate &&
        updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
    },
    [
      thisContent,
      updateContentToSentenceInOrderTemplate,
      currentSlide.id,
      setAnswerIndex,
    ],
  );

  const deleteSentence = useCallback(
    (characterIndex: number, sentenceIndex: number) => {
      if (thisContent.data.characters.length === 1) {
        addToast("최소 1개이상 입력하셔야 합니다.", "info");
        return;
      }

      const updatedContent = cloneDeep(thisContent);
      const removeIndex = updatedContent.data.characters[
        characterIndex
      ].sentences.findIndex((v, i) => i === sentenceIndex);
      updatedContent.data.characters[characterIndex].sentences.splice(
        removeIndex,
        1,
      );
      if (updatedContent.data.characters[characterIndex].sentences.length < 1) {
        updatedContent.data.characters.splice(characterIndex, 1);
      }
      const newContent = setAnswerIndex(updatedContent);
      updateContentToSentenceInOrderTemplate &&
        updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
    },
    [
      thisContent,
      currentSlide.id,
      updateContentToSentenceInOrderTemplate,
      setAnswerIndex,
      addToast,
    ],
  );

  const characters = useMemo(() => {
    return thisContent.data.characters.map((character, characterIndex) => {
      return (
        <CharactersEditWrapper
          key={characterIndex}
          onClick={(e) => setFocusedId(e, thisContent.id)}
        >
          <CharacterInputWrapper
            characterImageSrc={character.src}
            characterName={character.name}
            characterSetImage={(src: string) => setImage(src, characterIndex)}
            characterSetName={setName(characterIndex)}
          />
          <QuestionListWrapper>
            {character.sentences.map((sentence, sentenceIndex) => {
              return (
                <QuestionWrapper key={sentenceIndex}>
                  <QuestionTextBox
                    onClick={focusTextEditor(
                      `cha${characterIndex}_sen${sentenceIndex}`,
                    )}
                  >
                    <TextEditorViewer
                      setText={(text) =>
                        setText(characterIndex, sentenceIndex, text)
                      }
                      text={getText(characterIndex, sentenceIndex)}
                      isFocused={isTextEditorFocused(
                        isFocused,
                        `cha${characterIndex}_sen${sentenceIndex}`,
                      )}
                      handleSubmitTextOnBlur={resetFocusedTextEditorIndex}
                    />
                  </QuestionTextBox>
                  <QuestionButtonWrapper>
                    <CheckBoxWrapper
                      isActivated={sentence.isChoice ?? false}
                      onClick={() =>
                        setIsChoice(
                          characterIndex,
                          sentenceIndex,
                          !sentence.isChoice,
                        )
                      }
                    >
                      문제
                    </CheckBoxWrapper>
                    <ObjectDeleteButton
                      onClick={() =>
                        deleteSentence(characterIndex, sentenceIndex)
                      }
                    />
                  </QuestionButtonWrapper>
                </QuestionWrapper>
              );
            })}
          </QuestionListWrapper>
        </CharactersEditWrapper>
      );
    });
  }, [
    thisContent,
    setImage,
    setName,
    setText,
    getText,
    focusTextEditor,
    isFocused,
    isTextEditorFocused,
    resetFocusedTextEditorIndex,
    setFocusedId,
    setIsChoice,
    deleteSentence,
  ]);

  const addCharacter = useCallback(() => {
    const newContent = cloneDeep(thisContent);
    newContent.data.characters.push({
      name: "",
      src: "",
      sentences: [
        {
          answerIndex: -1,
          isChoice: false,
          sentence: "",
        },
      ],
    });
    updateContentToSentenceInOrderTemplate &&
      updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
    setCharacterIndex((prev) => prev + 1);
  }, [thisContent, updateContentToSentenceInOrderTemplate, currentSlide.id]);

  const addSentence = useCallback(() => {
    const newContent = cloneDeep(thisContent);
    newContent.data.characters[characterIndex].sentences.push({
      sentence: "",
      answerIndex: -1,
      isChoice: false,
    });
    updateContentToSentenceInOrderTemplate &&
      updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
  }, [
    thisContent,
    updateContentToSentenceInOrderTemplate,
    currentSlide.id,
    characterIndex,
  ]);

  const saveQuizPopupModalData = (data: QuizPopupModalContentData) => {
    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        quizPopup: data,
      },
    };
    updateContentToSentenceInOrderTemplate &&
      updateContentToSentenceInOrderTemplate(currentSlide.id, newContent);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      isEditBtn={isEditBtn}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <div className="flex-wrap">
        <LayerEditButtonWrapper>
          <Button
            type="button"
            onClick={() => {
              setIsModalSolutionOpen(true);
              setSolutionType("correct");
            }}
          >
            정답 레이어 수정
          </Button>
          <Button
            type="button"
            onClick={() => {
              setIsModalSolutionOpen(true);
              setSolutionType("incorrect");
            }}
          >
            오답 레이어 수정
          </Button>
        </LayerEditButtonWrapper>
        <AddButtonWrapper>
          <AddButton onClick={addSentence}>문항 추가</AddButton>
          <AddButton onClick={addCharacter}>화자 추가</AddButton>
        </AddButtonWrapper>
        {characters}
      </div>
      <ModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
        saveSolutionModalData={saveQuizPopupModalData}
        quizPopupModalData={thisContent.data.quizPopup}
        solutionType={solutionType}
      />
    </ContentCreatorLayout>
  );
};

export default SentenceWordsInOrderCreator;
