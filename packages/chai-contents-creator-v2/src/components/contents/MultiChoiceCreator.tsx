import styled from "@emotion/styled";
import {
  Content,
  ContentType,
  ID,
  MultiChoiceContentData,
  QuizPopupModalContentData,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { getContentComponentsDefaultValue } from "../../data/appData";
import {
  CommonTemplateComponentLocation,
  DraggableContentCommonProps,
} from "../../types/page";
import Button from "../atoms/Button";
import ComponentGrayLineCreator from "../molecules/ComponentGrayLineCreator";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ModalSolution from "../molecules/modal/ModalSolution";
import TextEditorViewer from "../molecules/TextEditorViewer";

const MultiChoiceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const ContentBox = styled.div`
  width: 100%;
`;

const ChoiceWrap = styled.div`
  width: 100%;
`;

interface ChoiceLabelProps {
  isFocus: boolean;
}

const ChoiceLabel = styled.label<ChoiceLabelProps>`
  margin-bottom: 8px;
  ${(props) =>
    props.isFocus && `height:auto; display:flex; align-items: center;`}
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

const MultiChoiceCreator = ({
  content,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  isEditBtn,
  deleteContent,
  updateContentToMultiChoiceTemplate,
  isFocused,
  setFocusedId,
}: DraggableContentCommonProps) => {
  const thisContent = content as MultiChoiceContentData;

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

    updateContentToMultiChoiceTemplate &&
      updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
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
      updateContentToMultiChoiceTemplate &&
        updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToMultiChoiceTemplate],
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

      updateContentToMultiChoiceTemplate &&
        updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToMultiChoiceTemplate],
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

      updateContentToMultiChoiceTemplate &&
        updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
    },
    [thisContent, currentSlide.id, updateContentToMultiChoiceTemplate],
  );

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = useCallback(
    (rowIndex: number, text: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          choice: thisContent.data.choice.map((ch, chIndex) => {
            if (chIndex === rowIndex) {
              return text;
            }
            return ch;
          }),
        },
      };
      updateContentToMultiChoiceTemplate &&
        updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToMultiChoiceTemplate, currentSlide.id],
  );

  const setAnswer = useCallback(
    (rowIndex: number) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          answerIndex: rowIndex,
        },
      };
      updateContentToMultiChoiceTemplate &&
        updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToMultiChoiceTemplate, currentSlide.id],
  );

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
  const getText = useCallback(
    (rowIndex: number) => {
      return thisContent.data.choice[rowIndex] ?? "";
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

  const saveQuizPopupModalData = (data: QuizPopupModalContentData) => {
    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        quizPopup: data,
      },
    };
    updateContentToMultiChoiceTemplate &&
      updateContentToMultiChoiceTemplate(currentSlide.id, newContent);
  };

  const choices = useMemo(() => {
    return thisContent.data.choice.map((choice, choiceIndex) => {
      return (
        <div className="inp-grp">
          <input
            name="answer"
            id={`answer${choiceIndex}`}
            className="inp-chck-gray none"
            checked={false}
          />
          <ChoiceLabel
            htmlFor={`answer${choiceIndex}`}
            className="label-chck-gray"
            onClick={focusTextEditor(choiceIndex)}
            isFocus={isTextEditorFocused(isFocused, choiceIndex)}
          >
            <span className="text">
              <TextEditorViewer
                setText={(text) => setText(choiceIndex, text)}
                text={getText(choiceIndex)}
                isFocused={isTextEditorFocused(isFocused, choiceIndex)}
                handleSubmitTextOnBlur={resetFocusedTextEditorIndex}
              />
            </span>
          </ChoiceLabel>
          <AnswerInput
            type="radio"
            name="answerCheck"
            id={`answerCheck${choiceIndex}`}
          />
          <label
            htmlFor={`answerCheck${choiceIndex}`}
            onClick={() => setAnswer(choiceIndex)}
          >
            <span className="text">정답</span>
          </label>
        </div>
      );
    });
  }, [
    thisContent,
    focusTextEditor,
    getText,
    isFocused,
    isTextEditorFocused,
    setText,
    setAnswer,
    resetFocusedTextEditorIndex,
  ]);

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
        <MultiChoiceWrapper onClick={(e) => setFocusedId(e, content.id)}>
          <ComponentGrayLineCreator
            contents={thisContent.data.exampleContents ?? []}
            addComponent={addComponent}
            currentSlide={currentSlide}
            position={position}
            updateComponent={updateComponent}
            deleteComponent={deleteComponent}
            handleOnDragEnd={handleOnDragEnd}
          />
          <ChoiceWrap className={`quiz-answer-wrap hori-answer-wrap`}>
            {choices}
          </ChoiceWrap>
        </MultiChoiceWrapper>
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

export default MultiChoiceCreator;