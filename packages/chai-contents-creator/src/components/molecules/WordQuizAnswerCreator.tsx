import React from "react";
import {
  colorPalette,
  IconCheck,
  WordQuizAnswerIconWrapper,
  WordQuizAnswerStyles,
} from "chai-ui";
import TextCreator from "./TextCreator";

interface WordQuizAnswerProps {
  text: string;
  id: string;
  contentIndex: number;
  handleFocusHtml:
    | ((
        id?: string | undefined,
        type?: string | undefined,
        index?: number | undefined
      ) => void)
    | undefined;
  focusEditor: string | undefined;
  handleSubmitText: (
    text: string,
    keyName?: string,
    index?: number | string
  ) => void;
  color?: string;
}

const WordQuizAnswerCreator = ({
  text,
  id,
  contentIndex,
  handleFocusHtml,
  focusEditor,
  handleSubmitText,
  color = `${colorPalette.blankBorderColor}`,
}: WordQuizAnswerProps) => {
  return (
    <WordQuizAnswerStyles color={color}>
      <WordQuizAnswerIconWrapper color={color}>
        <IconCheck />
      </WordQuizAnswerIconWrapper>
      <TextCreator
        html={text}
        id={id + "wordQuiz" + contentIndex}
        textMaxLength={10}
        onSubmitHtml={handleSubmitText}
        focusEditor={focusEditor}
        onClickHtml={() => {
          if (!handleFocusHtml) return;
          handleFocusHtml(id, `wordQuiz`, contentIndex);
        }}
        index={contentIndex}
      />
    </WordQuizAnswerStyles>
  );
};

export default WordQuizAnswerCreator;
