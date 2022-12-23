import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { WordQuizData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import QuestionBlank from "../atoms/QuestionBlank";
import WordQuizAnswer from "../atoms/WordQuizAnswer";
import Explanation from "../molecules/Explanation";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

const WordQuizWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: max-content;
`;
const WordQuizAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${changePXtoVH(32)} ${changePXtoVW(40)};
  margin: ${changePXtoVW(32)} auto ${changePXtoVW(64)};
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
  font-size: ${changePXtoVW(64)};
  font-weight: 400;
  color: ${colorPalette.black};
`;

interface WordQuizProps {
  datas: WordQuizData[];
}

const WordQuizTP10C = ({ datas }: WordQuizProps) => {
  const { text, choices, explanation, meaning, answerIndex } = datas?.[0];
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sortList, setSortList] = useState<string[]>([]);
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);

  const texts = text
    .replace(/<[^>]*>?/g, "")
    .split(/(\*.*?\*)/)
    .filter((content) => {
      return content.length > 0;
    });

  useEffect(() => {
    const choicesCopy = [...choices];
    setSortList(choicesCopy.sort(() => Math.random() - 0.5));
    choices.forEach((choice) => {
      if (choice.length > choiceMaxLength) {
        setChoiceMaxLength(choice.length);
      }
    });
  }, [answerIndex, choices, choiceMaxLength]);

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
  console.log(choiceMaxLength);
  return (
    <WordQuizWrapper>
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
      <HtmlContentComponent html={meaning} customCss={meaningCss} />
      <QuestionWrapper>
        <QuestionBlank
          text={selectedIndex !== undefined ? sortList[selectedIndex] : ""}
          width={`${choiceMaxLength * 20}px`}
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

export default WordQuizTP10C;
