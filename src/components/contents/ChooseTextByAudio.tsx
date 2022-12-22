import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import XIcon from "../atoms/svg/XIcon";
import OIcon from "../atoms/svg/OIcon";
import AudioButton from "../atoms/AudioButton";
import { css } from "@emotion/react";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import { sortChoices } from "../../utils/sortChoices";

const QuestionList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: ${changePXtoVW(32)};
  position: relative;
  margin-top: ${changePXtoVH(12)};

  &.hide {
    opacity: 0.4;
  }
`;

const QuizIndex = styled.div`
  position: relative;
  font-weight: 600;
  font-size: ${changePXtoVW(32)};
  width: ${changePXtoVW(76)};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${changePXtoVW(10)};
`;

const QuizAnswerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${changePXtoVW(40)};
`;

const QuizAnswer = styled.div`
  display: inline-block;
  color: #9b9b9b;
`;

interface QuizWordProps {
  color: string;
}

const QuizWord = styled.div<QuizWordProps>`
  position: relative;
  display: inline-block;
  min-width: ${changePXtoVW(192)};
  padding: ${changePXtoVH(20)} ${changePXtoVW(32)};
  border: 0.2083333333vw solid #9b9b9b;
  border-radius: ${changePXtoVW(52)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
  cursor: pointer;

  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;

const OXIconCss = css`
  position: absolute;
`;

interface ChooseTextByAudioProps {
  contentIndex: number;
  choices: string[];
  isCheck: boolean;
  audioUrl: string;
  checkAnswer: (answer: string, contentIndex: number) => void;
  isHide: boolean;
  handleClickAudio: (src: string, index: number) => void;
  currentAudioIndex: number;
  audioState: boolean;
}

const ChooseTextByAudio = ({
  contentIndex,
  choices,
  isCheck,
  checkAnswer,
  audioUrl,
  currentAudioIndex,
  handleClickAudio,
  isHide,
  audioState,
}: ChooseTextByAudioProps) => {
  const [checkIndex, setCheckIndex] = useState<number>(100);
  const [sortList, setSortList] = useState<string[]>([]);

  useEffect(() => {
    sortChoices(choices, setSortList);
  }, [choices]);

  const renderCheckIcon = useMemo(() => {
    if (isCheck === undefined) {
      return;
    }
    if (isCheck) {
      return <OIcon css={OXIconCss} />;
    } else {
      return <XIcon css={OXIconCss} />;
    }
  }, [isCheck]);

  const handleClickAnswer = useCallback(
    (choice: string, index: number) => {
      if (isCheck !== undefined) {
        return;
      }
      setCheckIndex(index);
      checkAnswer(choice, contentIndex);
    },
    [checkAnswer, isCheck, contentIndex],
  );

  const getAnswerBorderColor = useCallback(
    (index: number) => {
      if (checkIndex === index) {
        if (isCheck === false) {
          return colorPalette.wrongAnswer;
        } else {
          return colorPalette.deepBlue;
        }
      } else {
        return colorPalette.blankBorderColor;
      }
    },
    [checkIndex, isCheck],
  );

  const QuizAnswerContents = useMemo(() => {
    return sortList.map((choice, index) => {
      return (
        <QuizAnswer
          key={index}
          onClick={() => {
            !isHide && handleClickAnswer(choice, index);
          }}
        >
          <QuizWord color={getAnswerBorderColor(index)}>{choice}</QuizWord>
        </QuizAnswer>
      );
    });
  }, [sortList, handleClickAnswer, isHide, getAnswerBorderColor]);

  return (
    <QuestionList className={isHide === true ? "hide" : ""}>
      <QuizIndex>
        {`${contentIndex}.`}
        {renderCheckIcon}
      </QuizIndex>
      <QuizAnswerWrap>{QuizAnswerContents}</QuizAnswerWrap>
      <AudioButton
        audioHide={isHide}
        audioUrl={audioUrl}
        audioIndex={contentIndex}
        audioHandler={handleClickAudio}
        isAudio={false}
        currentAudioIndex={currentAudioIndex}
        audioState={audioState}
      />
    </QuestionList>
  );
};

export default ChooseTextByAudio;
