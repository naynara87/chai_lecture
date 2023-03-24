import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Content,
  ContentType,
  ID,
  QuizPopupModalContentData,
  vh,
  vw,
  WordsInOrderContentData,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { getContentComponentsDefaultValue } from "../../data/appData";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import AddButton from "../atoms/AddButton";
import Button from "../atoms/Button";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import ComponentGrayLineCreator from "../molecules/ComponentGrayLineCreator";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ModalSolution from "../molecules/modal/ModalSolution";
import CharacterCreator from "../molecules/CharacterCreator";

const ConversationWrap = styled.div`
  margin-top: 0 !important;
`;

const AnswerWrap = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const AnswerBoxWrap = styled.div`
  position: relative;
`;

interface AnswerBoxProps {
  isFocus: boolean;
}

const AnswerBox = styled.div<AnswerBoxProps>`
  width: ${(props) => (props.isFocus ? "auto" : vw(220))};
  height: ${(props) => (props.isFocus ? "auto" : vh(130))};
  padding: ${vw(20)} ${vh(50)};
  background-color: #f5f5f5;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const WordsInOrderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const ContentBox = styled.div`
  width: 100%;
`;

const deleteButtonStyle = css`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const WordsInOrderCreator = ({
  content,
  setFocusedId,
  isFocused,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  isEditBtn,
  deleteContent,
  updateContentToWordsInOrderTemplate,
}: DraggableContentCommonProps) => {
  const thisContent = content as WordsInOrderContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [solutionType, setSolutionType] = useState<"correct" | "incorrect">();

  const focusTextEditor = useCallback(
    (choiceIndex: number) => () => {
      setFocusedTextEditorIndex(choiceIndex);
    },
    [],
  );

  const resetFocusedTextEditorIndex = useCallback(() => {
    setFocusedTextEditorIndex(undefined);
  }, []);

  const addComponent = (contentType: ContentType) => {
    const content = getContentComponentsDefaultValue()[contentType];

    if (!content) return;

    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        exampleContents: [...thisContent.data.exampleContents!, { ...content }],
      },
    };

    updateContentToWordsInOrderTemplate &&
      updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
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
        data: {
          ...thisContent.data,
          exampleContents: thisContent.data.exampleContents!.map(
            (component) => {
              if (component.id === contentId) {
                return updatedContent;
              }
              return component;
            },
          ),
        },
      };
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToWordsInOrderTemplate],
  );

  const deleteComponent = useCallback(
    (slideId: ID, contentId: ID, position: CommonTemplateComponentLocation) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          exampleContents: thisContent.data.exampleContents!.filter(
            (component) => component.id !== contentId,
          ),
        },
      };

      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToWordsInOrderTemplate],
  );

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }

      const newContent = cloneDeep(thisContent);
      if (!newContent.data.exampleContents) return;
      const [removed] = newContent.data.exampleContents.splice(source.index, 1);
      newContent.data.exampleContents.splice(destination.index, 0, removed);

      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToWordsInOrderTemplate],
  );

  const setName = useCallback(
    (text: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          character: {
            ...thisContent.data.character!,
            name: text,
          },
        },
      };
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToWordsInOrderTemplate, currentSlide.id],
  );

  const setImage = useCallback(
    (src: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          character: {
            ...thisContent.data.character!,
            src,
          },
        },
      };
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToWordsInOrderTemplate, currentSlide.id],
  );

  const character = useMemo(() => {
    return (
      <CharacterCreator
        characterUrl={thisContent.data.character?.src ?? ""}
        onImageUrlSubmit={setImage}
        onSaveCharacterNameInput={setName}
      />
    );
  }, [setName, setImage, thisContent.data]);

  const setIsUseCharacter = () => {
    const newContent = {
      ...thisContent,
      meta: {
        isUseCharacter: !thisContent.meta?.isUseCharacter,
      },
    };
    updateContentToWordsInOrderTemplate &&
      updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
  };

  const setIsChoice = useCallback(
    (choiceIndex: number, currentIsChoice: boolean) => {
      let blankIndex = -1;
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          choice: thisContent.data.choice.map((_choice, _choiceIndex) => {
            if (_choice.isChoice) {
              blankIndex++;
            }
            if (choiceIndex === _choiceIndex) {
              if (currentIsChoice) {
                blankIndex++;
              }
              return {
                ..._choice,
                isChoice: currentIsChoice,
                answerIndex: currentIsChoice ? blankIndex : -1,
              };
            }
            return {
              ..._choice,
              answerIndex: _choice.isChoice ? blankIndex : -1,
            };
          }),
        },
      };
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToWordsInOrderTemplate, currentSlide.id],
  );

  const deleteAnswer = useCallback(
    (listIndex: number) => () => {
      const newContent = cloneDeep(thisContent);
      const removeIndex = newContent.data.choice.findIndex(
        (v, i) => i === listIndex,
      );
      newContent.data.choice.splice(removeIndex, 1);
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToWordsInOrderTemplate],
  );

  const addAnswer = useCallback(() => {
    const newContent = cloneDeep(thisContent);
    newContent.data.choice.push({
      text: "",
      isChoice: false,
      answerIndex: -1,
    });
    updateContentToWordsInOrderTemplate &&
      updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
  }, [thisContent, updateContentToWordsInOrderTemplate, currentSlide.id]);

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = useCallback(
    (rowIndex: number, text: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          choice: thisContent.data.choice.map((_choice, _choiceIndex) => {
            if (_choiceIndex === rowIndex) {
              return {
                ..._choice,
                text: text,
              };
            }
            return _choice;
          }),
        },
      };
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToWordsInOrderTemplate, currentSlide.id],
  );

  const getText = useCallback(
    (rowIndex: number) => {
      return thisContent.data.choice[rowIndex].text ?? "";
    },
    [thisContent.data],
  );

  const isTextEditorFocused = useCallback(
    (isCurrentComponentFocused: boolean, choiceIndex: number) => {
      return (
        isCurrentComponentFocused && focusedTextEditorIndex === choiceIndex
      );
    },
    [focusedTextEditorIndex],
  );

  const answers = useMemo(() => {
    return thisContent.data.choice.map((choice, choiceIndex) => {
      return (
        <AnswerBoxWrap key={choiceIndex}>
          <AnswerBox
            onClick={focusTextEditor(choiceIndex)}
            isFocus={isTextEditorFocused(isFocused, choiceIndex)}
          >
            <TextEditorViewer
              setText={(text) => setText(choiceIndex, text)}
              text={getText(choiceIndex)}
              isFocused={isTextEditorFocused(isFocused, choiceIndex)}
              handleSubmitTextOnBlur={resetFocusedTextEditorIndex}
              defaultText="?"
            />
          </AnswerBox>
          <CheckBoxWrapper
            isActivated={choice.isChoice ?? false}
            onClick={() => setIsChoice(choiceIndex, !choice.isChoice)}
          >
            문제
          </CheckBoxWrapper>
          {thisContent.data.choice.length > 1 && (
            <ObjectDeleteButton
              onClick={deleteAnswer(choiceIndex)}
              customCSS={deleteButtonStyle}
            />
          )}
        </AnswerBoxWrap>
      );
    });
  }, [
    thisContent.data,
    setIsChoice,
    deleteAnswer,
    setText,
    getText,
    isTextEditorFocused,
    resetFocusedTextEditorIndex,
    isFocused,
    focusTextEditor,
  ]);

  const saveQuizPopupModalData = (data: QuizPopupModalContentData) => {
    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        quizPopup: data,
      },
    };
    updateContentToWordsInOrderTemplate &&
      updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
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
      align="center"
      isContainerFullWidth={true}
    >
      <ContentBox className="flex-wrap">
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
        <WordsInOrderWrapper onClick={(e) => setFocusedId(e, content.id)}>
          <ComponentGrayLineCreator
            contents={thisContent.data.exampleContents ?? []}
            addComponent={addComponent}
            currentSlide={currentSlide}
            position={position}
            updateComponent={updateComponent}
            deleteComponent={deleteComponent}
            handleOnDragEnd={handleOnDragEnd}
          />
          <FlexWrap>
            <AddButton onClick={addAnswer}>문항 추가</AddButton>
            <CheckBoxWrapper
              isActivated={thisContent.meta?.isUseCharacter ?? false}
              onClick={setIsUseCharacter}
            >
              화자 있음
            </CheckBoxWrapper>
          </FlexWrap>
          <ConversationWrap className="conversation-wrap">
            <div className="quiz-sentence-wrap">
              {thisContent.meta?.isUseCharacter && character}
            </div>
          </ConversationWrap>
          <AnswerWrap className="hori-answer-wrap">{answers}</AnswerWrap>
        </WordsInOrderWrapper>
      </ContentBox>
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

export default WordsInOrderCreator;
