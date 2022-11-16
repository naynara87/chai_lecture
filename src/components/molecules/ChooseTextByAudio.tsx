import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import XIcon from "../atoms/svg/XIcon";
import OIcon from "../atoms/svg/OIcon";
import AudioButton from "../atoms/AudioButton";

interface ChooseTextByAudioProps {
  index: number;
  choices: string[];
  isCheck: boolean;
  audioUrl: string;
  checkAnswer: (answer: number) => void;
  isHide: boolean;
  handleClickAudio: (src: string, index: number) => void;
  currentAudioIndex: number;
}

const QuestionList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 2.5vw;
  position: relative;
  &.hide {
    opacity: 0.4;
  }
`;

const QuizIndex = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 2.5vw;
  width: 4vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5208333333vw;
`;

const QuizAnswerWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 2.0833333333vw;
`;

const QuizAnswer = styled.div`
  display: inline-block;
  color: #9b9b9b;
`;

const QuizWord = styled.div`
  position: relative;
  display: inline-block;
  min-width: 10vw;
  padding: 1.3888888889vh 2.5vw 1.3888888889vh 2.5vw;
  border: 0.2083333333vw solid #9b9b9b;
  border-radius: 2.7083333333vw;
  font-weight: 600;
  font-size: 1.5625vw;
  cursor: pointer;

  &.checked {
    border-color: #40476b;
  }
`;

const ChooseTextByAudio = ({
  index,
  choices,
  isCheck,
  checkAnswer,
  audioUrl,
  currentAudioIndex,
  handleClickAudio,
  isHide,
}: ChooseTextByAudioProps) => {
  const [checkIndex, setCheckIndex] = useState<number>(100);
  const renderCheckIcon = useMemo(() => {
    if (isCheck === undefined) {
      return;
    }
    if (isCheck) {
      return <OIcon />;
    } else {
      return <XIcon />;
    }
  }, [isCheck]);

  const handleClickAnswer = useCallback(
    (index: number) => {
      setCheckIndex(index);
      checkAnswer(index);
    },
    [checkAnswer],
  );

  const QuizAnswerContents = useMemo(() => {
    return choices.map((choice, index) => {
      return (
        <QuizAnswer
          key={index}
          onClick={() => {
            handleClickAnswer(index);
          }}
        >
          <QuizWord className={checkIndex === index ? "checked" : ""}>{choice}</QuizWord>
        </QuizAnswer>
      );
    });
  }, [choices, handleClickAnswer, checkIndex]);

  return (
    <QuestionList className={isHide === true ? "hide" : ""}>
      <QuizIndex>
        {`${index}.`}
        {renderCheckIcon}
      </QuizIndex>
      <QuizAnswerWrap>{QuizAnswerContents}</QuizAnswerWrap>
      <AudioButton
        audioHide={isHide}
        audioUrl={audioUrl}
        audioIndex={index}
        audioHandler={handleClickAudio}
        isAudio={false}
        currentAudioIndex={currentAudioIndex}
      />
    </QuestionList>
  );
};

export default ChooseTextByAudio;