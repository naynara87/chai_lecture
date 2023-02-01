import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import XIcon from "../atoms/svg/XIcon";
import OIcon from "../atoms/svg/OIcon";
import AudioButton from "../atoms/AudioButton";
import { css } from "@emotion/react";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import { sortChoices } from "../../utils/sortChoices";
import { HtmlContentComponent } from "../molecules";
import { ChooseTextByAudioOptions } from "../../types";

export const QuestionList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${changePXtoVW(32)};
  margin-top: ${changePXtoVH(12)};

  &.hide {
    opacity: 0.4;
  }
`;

export const QuizIndex = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${changePXtoVW(76)};
  height: 100%;
  margin: 0 ${changePXtoVW(10)};
  font-weight: 600;
  font-size: ${changePXtoVW(32)};
`;

export const QuizAnswerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${changePXtoVW(40)};
`;

export const AudioQuizAnswer = styled.div`
  display: inline-block;
  color: #9b9b9b;
`;

interface QuizWordProps {
  color?: string;
}

export const QuizWord = styled.div<QuizWordProps>`
  position: relative;
  display: inline-block;
  min-width: ${changePXtoVW(192)};
  padding: ${changePXtoVH(20)} ${changePXtoVW(32)};
  border: 0.2083333333vw solid #9b9b9b;
  border-color: ${(props) => props.color};
  border-radius: ${changePXtoVW(52)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
  color: ${(props) => props.color};
  cursor: pointer;
`;

const OXIconCss = css`
  position: absolute;
`;

interface ChooseTextByAudioAnswerContentProps {
  contentIndex: number;
  choices: string[];
  isCheck: boolean;
  audioUrl?: string;
  checkAnswer: (answer: string, contentIndex: number) => void;
  isHide: boolean;
  handleClickAudio: (src: string, index: number) => void;
  currentAudioIndex: number;
  audioState: boolean;
  options?: ChooseTextByAudioOptions | undefined;
}

const ChooseTextByAudioAnswerContent = ({
  contentIndex,
  choices,
  isCheck,
  checkAnswer,
  audioUrl,
  currentAudioIndex,
  handleClickAudio,
  isHide,
  audioState,
  options,
}: ChooseTextByAudioAnswerContentProps) => {
  const [checkIndex, setCheckIndex] = useState<number>(-1);
  const [sortList, setSortList] = useState<string[]>([]);

  useEffect(() => {
    if (options && options.sortAnswer) {
      sortChoices(choices, setSortList);
    } else {
      setSortList(choices);
    }
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
    [checkAnswer, isCheck, contentIndex]
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
    [checkIndex, isCheck]
  );

  const QuizAnswerContents = useMemo(() => {
    return sortList.map((choice, index) => {
      return (
        <AudioQuizAnswer
          key={index}
          onClick={() => {
            !isHide && handleClickAnswer(choice, index);
          }}
        >
          <QuizWord color={getAnswerBorderColor(index)}>
            <HtmlContentComponent html={choice} />
          </QuizWord>
        </AudioQuizAnswer>
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

export default ChooseTextByAudioAnswerContent;
