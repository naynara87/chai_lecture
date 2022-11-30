import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { WordQuizData } from "../../types/templateContents";
import { changePXtoVW } from "../../utils/styles";
import QuestionBlank from "../atoms/QuestionBlank";
import WordQuizAnswer from "../atoms/WordQuizAnswer";
import Explanation from "../molecules/Explanation";
import AudioButton from "../atoms/AudioButton";
import TextBox from "../atoms/TextBox";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

const WordQuizWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: max-content;
`;
const WordQuizAnswerWrapper = styled.div`
  display: flex;
  margin: ${changePXtoVW(32)} 0 ${changePXtoVW(64)};
  width: ${changePXtoVW(382)};
  justify-content: space-between;
`;

const AudioWrapper = styled.div`
  margin: ${changePXtoVW(48)} auto;
`;

const TextBoxWrapper = styled.div`
  margin: 0 auto;
`;

const blankCss = css`
  height: ${changePXtoVW(104)};
  font-weight: 700;
  font-size: ${changePXtoVW(38)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPalette.white};
  margin: 12px auto 0;
`;

const meaningCss = css`
  font-weight: 500;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.black};
  margin: 0 auto;
`;

const customBoxCss = css`
  width: ${changePXtoVW(208)};
  height: ${changePXtoVW(108)};
`;
interface WordQuizProps {
  datas: WordQuizData[];
  reverse?: boolean;
}

const WordQuiz = ({ datas, reverse = false }: WordQuizProps) => {
  const { text, choices, explanation, meaning, answerIndex, audio } = datas?.[0];
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

  const changeDeepBlueColor = useMemo(() => {
    if (selectedIndex !== undefined) {
      return colorPalette.deepBlue;
    }
  }, [selectedIndex]);

  const renderBlankBackgroundColor = useMemo(() => {
    if (selectedIndex !== undefined) {
      if (selectedIndex === answerIndex) {
        return colorPalette.deepBlue;
      } else {
        return colorPalette.wrongAnswer;
      }
    } else {
      return colorPalette.backgroundWhite;
    }
  }, [selectedIndex, answerIndex]);

  return (
    <WordQuizWrapper>
      {reverse && (
        <TextBoxWrapper>
          <TextBox text={text} customBoxCss={customBoxCss} />
        </TextBoxWrapper>
      )}
      {reverse && (
        <AudioWrapper>
          <AudioButton isAudio={true} audioUrl={audio.src} />
        </AudioWrapper>
      )}
      <QuestionBlank
        text={choices[selectedIndex!]}
        width={reverse ? `${changePXtoVW(112)}` : `${changePXtoVW(240)}`}
        customCss={blankCss}
        backgroundColor={renderBlankBackgroundColor}
        borderColor={showExplanation ? colorPalette.white : undefined}
      />
      <WordQuizAnswerWrapper>
        {choices.map((choice, index) => {
          return (
            <WordQuizAnswer
              key={index}
              text={choice}
              index={index}
              onClickAnswer={handleClickQuizAnswer}
              color={index === selectedIndex ? changeDeepBlueColor : undefined}
            />
          );
        })}
      </WordQuizAnswerWrapper>
      <HtmlContentComponent html={meaning} customCss={meaningCss} />
      {!reverse && (
        <AudioWrapper>
          <AudioButton isAudio={true} audioUrl={audio.src} />
        </AudioWrapper>
      )}
      {showExplanation && explanation && (
        <Explanation
          explanation={explanation}
          isCorrect={selectedIndex === answerIndex}
          handleClickClose={handleClickCloseExplanation}
        />
      )}
    </WordQuizWrapper>
  );
};

export default WordQuiz;
