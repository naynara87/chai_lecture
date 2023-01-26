import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { WordQuizData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import QuestionBlank from "../atoms/QuestionBlank";
import WordQuizAnswer from "../atoms/WordQuizAnswer";
import Explanation from "../molecules/Explanation";
import AudioButton from "../atoms/AudioButton";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { sortChoices } from "../../utils/sortChoices";

const WordQuizWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: max-content;
`;
const WordQuizAnswerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${changePXtoVH(32)} ${changePXtoVW(40)};
  margin: ${changePXtoVW(32)} auto ${changePXtoVW(64)};
`;

const AudioWrapper = styled.div`
  margin: ${changePXtoVW(48)} auto;
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const blankCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${changePXtoVW(104)};
  margin: 12px auto 0;
  font-weight: 700;
  font-size: ${changePXtoVW(38)};
  color: ${colorPalette.white};
`;

const meaningCss = css`
  margin: 0 auto;
  font-weight: 500;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.black};
`;

const htmlCss = css`
  margin-left: 10px;
  font-weight: 400;
  font-size: ${changePXtoVW(64)};
  color: ${colorPalette.black};
`;

interface WordQuizProps {
  datas: WordQuizData[];
}

const WordQuizTP11B = ({ datas }: WordQuizProps) => {
  const { text, choices, explanation, meaning, answerIndex, audio } = datas?.[0];
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sortList, setSortList] = useState<string[]>([]);

  const texts = text
    .replace(/<[^>]*>?/g, "")
    .split(/(\*.*?\*)/)
    .filter((content) => {
      return content.length > 0;
    });

  useEffect(() => {
    sortChoices(choices, setSortList);
  }, [answerIndex, choices]);

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

  const renderColor = useMemo(() => {
    if (selectedIndex !== undefined) {
      if (choices[answerIndex] === sortList[selectedIndex]) {
        return colorPalette.deepBlue;
      } else {
        return colorPalette.wrongAnswer;
      }
    } else {
      return colorPalette.backgroundWhite;
    }
  }, [selectedIndex, choices, answerIndex, sortList]);

  const choiceMaxLength = useMemo(() => {
    return Math.max(choices[0].length, choices[1].length);
  }, [choices]);

  return (
    <WordQuizWrapper>
      <QuestionWrapper>
        <QuestionBlank
          text={selectedIndex !== undefined ? sortList[selectedIndex] : ""}
          width={`${choiceMaxLength * 60}px`}
          customCss={blankCss}
          backgroundColor={renderColor}
          borderColor={selectedIndex !== undefined ? colorPalette.white : undefined}
        />
        {texts.map((text) => {
          return text.indexOf("*") !== 0 ? (
            <HtmlContentComponent html={text} customCss={htmlCss} />
          ) : (
            <></>
          );
        })}
      </QuestionWrapper>

      <HtmlContentComponent html={meaning} customCss={meaningCss} />
      {audio && (
        <AudioWrapper>
          <AudioButton isAudio={true} audioUrl={audio.src} />
        </AudioWrapper>
      )}
      <WordQuizAnswerWrapper>
        {sortList.map((choice, index) => {
          return (
            <WordQuizAnswer
              key={index}
              text={choice}
              index={index}
              onClickAnswer={handleClickQuizAnswer}
              color={index === selectedIndex ? renderColor : undefined}
            />
          );
        })}
      </WordQuizAnswerWrapper>
      {showExplanation && (
        <Explanation
          explanation={explanation}
          isCorrect={choices[answerIndex] === sortList[selectedIndex!]}
          handleClickClose={handleClickCloseExplanation}
        />
      )}
    </WordQuizWrapper>
  );
};

export default WordQuizTP11B;
