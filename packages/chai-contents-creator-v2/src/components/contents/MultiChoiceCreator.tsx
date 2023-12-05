import styled from "@emotion/styled";
import { MultiChoiceContentData, QuizPopupModalContentData } from "chai-ui-v2";
import React, { useState } from "react";
import useGrayLineComponent from "../../hooks/useGrayLineComponent";
import { DraggableContentCommonProps } from "../../types/page";
import Button from "../atoms/Button";
import ComponentGrayLineCreator from "../molecules/ComponentGrayLineCreator";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ModalSolution from "../molecules/modal/ModalSolution";
import MultiChoiceItem from "../molecules/MultiChoiceItem";

const MultiChoiceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  > div {
    margin-top: 5vmin;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const ContentBox = styled.div`
  width: 100%;
`;

const ChoiceWrap = styled.div`
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
`;

export const AnswerCheckText = styled.span`
  font-size: 12px;
`;

export const AnswerInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: $border-3 solid #c9c9c9;
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
  copyContent,
  pasteContent,
  updateContentToMultiChoiceTemplate,
  isFocused,
  setFocusedId,
}: DraggableContentCommonProps) => {
  const thisContent = content as MultiChoiceContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [solutionType, setSolutionType] = useState<"correct" | "incorrect">();

  const { addComponent, deleteComponent, updateComponent, handleOnDragEnd } =
    useGrayLineComponent({
      content: thisContent,
      currentSlide,
      updateContentToTemplate: updateContentToMultiChoiceTemplate,
    });

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
            {thisContent.data.choice.map((_, choiceIndex) => (
              <MultiChoiceItem
                key={`${choiceIndex}`}
                currentSlide={currentSlide}
                choiceIndex={choiceIndex}
                isFocused={isFocused}
                focusedTextEditorIndex={focusedTextEditorIndex}
                setFocusedTextEditorIndex={setFocusedTextEditorIndex}
                thisContent={thisContent}
                updateContentToMultiChoiceTemplate={
                  updateContentToMultiChoiceTemplate
                }
              />
            ))}
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
