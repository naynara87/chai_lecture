import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface QuizAnswerStyleProps {
  color: string;
}

// TODO: vw, vh 를 px 단위로 변경
const QuizAnswerStyle = styled.li<QuizAnswerStyleProps>`
  .label-quiz-answer {
    display: inline-block;
    color: #9b9b9b;
    margin: 0 ${changePXtoVW(16)};
    margin-top: 0;
    cursor: pointer;
  }
  .label-quiz-answer .word-wrap {
    position: relative;
    display: inline-block;
    padding: ${changePXtoVH(20)} ${changePXtoVW(32)} ${changePXtoVH(20)} ${changePXtoVW(88)};
    border: 0.2083333333vw solid #9b9b9b;
    border-radius: ${changePXtoVW(52)};
    font-weight: 600;
    font-size: ${changePXtoVW(30)};
  }
  .label-quiz-answer .word-wrap .img-wrap {
    width: ${changePXtoVW(32)};
    height: ${changePXtoVW(32)};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: ${changePXtoVW(24)};
    background-color: #9b9b9b;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .label-quiz-answer .word-wrap .img-wrap .icon {
    width: 58%;
  }
  .label-quiz-answer .phonetic-wrap {
    margin-top: ${changePXtoVH(16)};
    padding-left: ${changePXtoVW(88)};
    font-weight: 500;
    font-size:${changePXtoVW(30)};
    text-align: left;
  }

  .inp-quiz-answer ~ .label-quiz-answer {
    color: ${(props) => props.color};
  }
  .inp-quiz-answer ~ .label-quiz-answer .word-wrap {
    border-color: ${(props) => props.color};
  }
  .inp-quiz-answer ~ .label-quiz-answer .word-wrap .img-wrap {
    background-color: ${(props) => props.color};
  }

  .none {
    display: none;
  }
`;

interface QuizAnswerProps {
  answerText: string;
  isCorrect: boolean;
  index: number;
  checked: boolean;
  onClickAnswer: (answerIndex: number) => void;
}
const QuizAnswer = ({
  answerText,
  isCorrect,
  index,
  onClickAnswer,
  checked = false,
}: QuizAnswerProps) => {
  const handleClickAnswer = () => {
    onClickAnswer(index);
  };

  const changeColor = useMemo(() => {
    if (checked) {
      if (isCorrect) {
        return colorPalette.deepBlue;
      } else {
        return colorPalette.wrongAnswer;
      }
    } else {
      return colorPalette.disableBackground;
    }
  }, [checked, isCorrect]);

  return (
    <QuizAnswerStyle className="quiz-answer-list" color={changeColor}>
      <input type="radio" id={answerText} name="quiz-answer" className="inp-quiz-answer none" />
      <label htmlFor={answerText} className="label-quiz-answer" onClick={handleClickAnswer}>
        <div className="word-wrap">
          <div className="img-wrap">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/images/icon/icon_check.svg`}
              alt=""
              className="icon"
            />
          </div>
          {answerText}
        </div>
      </label>
    </QuizAnswerStyle>
  );
};

export default QuizAnswer;
