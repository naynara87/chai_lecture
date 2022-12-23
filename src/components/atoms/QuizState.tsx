import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import IconCheck from "./svg/IconCheck";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { QuizStateType } from "../../types/quiz";

interface QuizStateItemProps {
  backgroundColor: string;
  borderColor: string;
}

const QuizStateItem = styled.li<QuizStateItemProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${changePXtoVW(32)};
  height: ${changePXtoVW(32)};
  margin: ${changePXtoVH(4)} ${changePXtoVW(5)};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  user-select: none;

  > svg {
    width: ${changePXtoVW(25)};
  }
`;

interface QuizStateProps {
  isCorrect: QuizStateType;
}
const QuizState = ({ isCorrect }: QuizStateProps) => {
  const quizStateBackgroundColor = useMemo(() => {
    if (isCorrect === "inCorrect") {
      return colorPalette.deepBlue;
    } else if (isCorrect === "correct") {
      return colorPalette.white;
    } else {
      return colorPalette.disableBackground;
    }
  }, [isCorrect]);

  const quizStateBorderColor = useMemo(() => {
    if (isCorrect === "inCorrect") {
      return colorPalette.white;
    } else if (isCorrect === "correct") {
      return colorPalette.white;
    } else {
      return colorPalette.disableBackground;
    }
  }, [isCorrect]);

  const quizStateIconColor = useMemo(() => {
    if (isCorrect === "inCorrect") {
      return colorPalette.white;
    } else if (isCorrect === "correct") {
      return colorPalette.deepBlue;
    } else {
      return colorPalette.white;
    }
  }, [isCorrect]);

  return (
    <QuizStateItem backgroundColor={quizStateBackgroundColor} borderColor={quizStateBorderColor}>
      <IconCheck color={quizStateIconColor} />
    </QuizStateItem>
  );
};

export default QuizState;
