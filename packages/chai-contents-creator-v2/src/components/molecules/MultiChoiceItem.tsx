import styled from "@emotion/styled";
import { AllTemplateData, ID, MultiChoiceContentData, vw } from "chai-ui-v2";
import React, { useCallback } from "react";
import TextEditorViewer from "./TextEditorViewer";
import { AnswerCheckText, AnswerInput } from "../contents/MultiChoiceCreator";
import { ExampleUseContent } from "../../hooks/useGrayLineComponent";

interface ChoiceLabelProps {
  isFocus: boolean;
}

const ChoiceLabel = styled.label<ChoiceLabelProps>`
  height: 100%;
  padding: ${vw(20)} ${vw(40)};
  margin-bottom: 8px;
  ${(props) =>
    props.isFocus && `height:auto; display:flex; align-items: center;`}
`;

interface MultiChoiceItemProps {
  currentSlide: AllTemplateData;
  choiceIndex: number;
  isFocused: boolean;
  focusedTextEditorIndex: number | undefined;
  setFocusedTextEditorIndex: (index: number | undefined) => void;
  thisContent: MultiChoiceContentData;
  updateContentToMultiChoiceTemplate:
    | ((slideId: ID, updatedContent: ExampleUseContent) => void)
    | undefined;
}

const MultiChoiceItem = ({
  currentSlide,
  choiceIndex,
  isFocused,
  focusedTextEditorIndex,
  setFocusedTextEditorIndex,
  thisContent,
  updateContentToMultiChoiceTemplate,
}: MultiChoiceItemProps) => {
  const focusTextEditor = useCallback(
    (choiceIndex: number) => () => {
      setFocusedTextEditorIndex(choiceIndex);
    },
    [setFocusedTextEditorIndex],
  );

  const isTextEditorFocused = useCallback(
    (isCurrentComponentFocused: boolean, choiceIndex: number) => {
      return (
        isCurrentComponentFocused && focusedTextEditorIndex === choiceIndex
      );
    },
    [focusedTextEditorIndex],
  );

  const resetFocusedTextEditorIndex = useCallback(() => {
    setFocusedTextEditorIndex(undefined);
  }, [setFocusedTextEditorIndex]);

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

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
  const getText = useCallback(
    (rowIndex: number) => {
      return thisContent.data.choice[rowIndex] ?? "";
    },
    [thisContent.data],
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

  return (
    <div className="inp-grp">
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
        name={`answerCheck_${thisContent.id}`}
        id={`answerCheck_${choiceIndex}_${thisContent.id}`}
        onClick={() => setAnswer(choiceIndex)}
      />
      <label
        htmlFor={`answerCheck_${choiceIndex}_${thisContent.id}`}
        onClick={() => setAnswer(choiceIndex)}
      >
        <AnswerCheckText className="text">정답</AnswerCheckText>
      </label>
    </div>
  );
};

export default MultiChoiceItem;
