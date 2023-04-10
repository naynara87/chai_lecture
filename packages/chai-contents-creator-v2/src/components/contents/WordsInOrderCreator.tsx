import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  QuizPopupModalContentData,
  useToast,
  vh,
  vw,
  WordsInOrderContentData,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import AddButton from "../atoms/AddButton";
import Button from "../atoms/Button";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import ComponentGrayLineCreator from "../molecules/ComponentGrayLineCreator";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ModalSolution from "../molecules/modal/ModalSolution";
import CharacterInputWrapper from "../molecules/ChracterInputWrapper";
import useGrayLineComponent from "../../hooks/useGrayLineComponent";

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
  width: ${(props) => (props.isFocus ? "auto" : vw(150))};
  /* height: ${(props) => (props.isFocus ? "auto" : vh(130))}; */
  height: auto;
  min-height: ${vh(130)};
  padding: ${vw(20)};
  background-color: #f5f5f5;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const textViewerCss = css`
  padding: 0;
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
  copyContent,
  pasteContent,
  updateContentToWordsInOrderTemplate,
}: DraggableContentCommonProps) => {
  const thisContent = content as WordsInOrderContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [solutionType, setSolutionType] = useState<"correct" | "incorrect">();
  const { addToast } = useToast();

  const { addComponent, deleteComponent, updateComponent, handleOnDragEnd } =
    useGrayLineComponent({
      content: thisContent,
      currentSlide: currentSlide,
      updateContentToTemplate: updateContentToWordsInOrderTemplate,
    });

  const focusTextEditor = useCallback(
    (choiceIndex: number) => () => {
      setFocusedTextEditorIndex(choiceIndex);
    },
    [],
  );

  const resetFocusedTextEditorIndex = useCallback(() => {
    setFocusedTextEditorIndex(undefined);
  }, []);

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
      if (thisContent.data.choice.length === 1) {
        addToast("최소 1개이상 입력하셔야 합니다.", "info");
        return;
      }

      const newContent = cloneDeep(thisContent);
      const removeIndex = newContent.data.choice.findIndex(
        (v, i) => i === listIndex,
      );
      newContent.data.choice.splice(removeIndex, 1);
      updateContentToWordsInOrderTemplate &&
        updateContentToWordsInOrderTemplate(currentSlide.id, newContent);
    },
    [
      thisContent,
      currentSlide.id,
      updateContentToWordsInOrderTemplate,
      addToast,
    ],
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
              defaultText="단어입력"
              textViewerCss={textViewerCss}
            />
          </AnswerBox>
          <CheckBoxWrapper
            isActivated={choice.isChoice ?? false}
            onClick={() => setIsChoice(choiceIndex, !choice.isChoice)}
          >
            문제
          </CheckBoxWrapper>

          <ObjectDeleteButton
            onClick={deleteAnswer(choiceIndex)}
            customCSS={deleteButtonStyle}
          />
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
      copyContent={copyContent}
      pasteContent={pasteContent}
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
          {thisContent.meta?.isUseCharacter && (
            <CharacterInputWrapper
              characterImageSrc={thisContent.data.character?.src ?? ""}
              characterName={thisContent.data.character?.name ?? ""}
              characterSetImage={(src: string) => setImage(src)}
              characterSetName={setName}
            />
          )}
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
