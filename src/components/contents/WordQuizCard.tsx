import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { WordQuizCardData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import QuestionBlank from "../atoms/QuestionBlank";
import WordQuizAnswer from "../atoms/WordQuizAnswer";
import HtmlContentComponent from "./HtmlContentComponent";
import Explanation from "../molecules/Explanation";
import AudioButton from "../atoms/AudioButton";

const WordQuizCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${changePXtoVW(80)};
`;
const WordQuizAnswerWrapper = styled.div`
  display: flex;
  margin: ${changePXtoVW(32)} 0 ${changePXtoVW(64)};
  width: ${changePXtoVW(382)};
  justify-content: space-between;
`;

const AudioWrapper = styled.div`
  margin-top: ${changePXtoVW(64)};
`;

const blankCss = css`
  width: ${changePXtoVW(240)};
  height: ${changePXtoVH(104)};
  font-weight: 700;
  font-size: ${changePXtoVW(38)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPalette.white};
`;

const meaningCss = css`
  font-weight: 500;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.black};
`;

interface WordQuizCardProps {
  datas: WordQuizCardData[];
}

const WordQuizCard = ({ datas }: WordQuizCardProps) => {
  const { choices, explanation, meaning, answerIndex, audio } = datas?.[0];
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [showExplanation, setShowExplanation] = useState(false);
  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };

  const handleClickQuizAnswer = useCallback(
    (index: number) => {
      if (selectedIndex !== undefined) {
        return;
      }
      setShowExplanation(true);
      setSelectedIndex(index);
    },
    [selectedIndex],
  );

  const changeColor = useMemo(() => {
    if (selectedIndex !== undefined) {
      return colorPalette.deepBlue;
    }
  }, [selectedIndex]);

  return (
    <WordQuizCardWrapper>
      <QuestionBlank
        text={choices[selectedIndex!]}
        customCss={blankCss}
        backgroundColor={changeColor}
      />
      <WordQuizAnswerWrapper>
        {choices.map((choice, index) => {
          return (
            <WordQuizAnswer
              key={index}
              text={choice}
              index={index}
              onClickAnswer={handleClickQuizAnswer}
              color={index === selectedIndex ? changeColor : undefined}
            />
          );
        })}
      </WordQuizAnswerWrapper>
      <HtmlContentComponent html={meaning} customCss={meaningCss} />
      <AudioWrapper>
        <AudioButton isAudio={true} audioUrl={audio.src} />
      </AudioWrapper>

      {showExplanation && (
        <Explanation
          explanation={explanation}
          isCorrect={selectedIndex === answerIndex}
          handleClickClose={handleClickCloseExplanation}
        />
      )}
    </WordQuizCardWrapper>
  );
};

export default WordQuizCard;
