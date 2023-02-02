import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { SortWordsContent } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import QuestionBlank from "../atoms/QuestionBlank";
import TextBox from "../atoms/TextBox";
import WordQuizAnswer from "../atoms/WordQuizAnswer";
import Explanation from "../molecules/Explanation";

export const SortWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SortWordsQuestionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SortWordsAnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${changePXtoVH(32)} ${changePXtoVW(30)};
  margin-top: ${changePXtoVH(32)};
`;

export const customSortWordsBoxCss = css`
  width: auto;
  height: ${changePXtoVW(96)};
  padding: ${changePXtoVW(20)};
  font-size: ${changePXtoVW(40)};
`;

export const sortWordsBlankCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${changePXtoVW(30)};
  cursor: pointer;
`;

interface SortWordsProps {
  sortWordsData: SortWordsContent;
}

const SortWords = ({ sortWordsData }: SortWordsProps) => {
  const { questions, fakeChoices, explanation } = sortWordsData.data[0];
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);
  const [userAnswerList, setUserAnswerList] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [choiceList, setChoiceList] = useState<string[]>([]);
  const [answerList, setAnswerList] = useState<string[]>([]);

  const isUserAnswerFull = useMemo(() => {
    return answerList.length > 0 && userAnswerList.length >= answerList.length;
  }, [answerList, userAnswerList]);

  const firstAnswerRender = useCallback(() => {
    fakeChoices && setChoiceList(fakeChoices);

    questions.forEach((question) => {
      if (question.indexOf("*") !== -1) {
        const rePlaceQuestion = question.replace(/\*[^>]*?/g, "");
        setAnswerList((prev) => [...prev, rePlaceQuestion]);
        setChoiceList((prev) => [...prev, rePlaceQuestion]);
      }
    });
    setChoiceList((prev) => prev.sort(() => Math.random() - 0.5));
  }, [questions]);

  useEffect(() => {
    firstAnswerRender();
  }, []);

  const popBlankText = useCallback(
    (blankIndex: number) => {
      if (userAnswerList.length >= answerList.length) {
        return;
      }
      const copyUserAnswerList = [...userAnswerList];
      copyUserAnswerList[blankIndex] = "";

      setUserAnswerList(copyUserAnswerList);
    },
    [userAnswerList, answerList]
  );

  const renderBlankBackgroundColor = useCallback(
    (findIndex: number): string | undefined => {
      if (isUserAnswerFull) {
        if (userAnswerList[findIndex] === answerList[findIndex]) {
          return colorPalette.deepBlue;
        } else {
          return colorPalette.wrongAnswer;
        }
      } else if (userAnswerList[findIndex]) {
        return colorPalette.deepBlue;
      } else {
        return undefined;
      }
    },
    [userAnswerList, answerList, isUserAnswerFull]
  );

  const questionContents = useMemo(() => {
    questions.forEach((question) => {
      if (question.length > choiceMaxLength) {
        setChoiceMaxLength(question.length);
      }
    });
    let blankIndex = -1;
    return questions.map((question, index) => {
      // *한자1*, 한자2, *한자3*
      if (question.indexOf("*") !== 0) {
        // '*'가 포함되지 않으면 -1이 나오므로 TextBox render
        return (
          <TextBox
            key={index}
            text={question}
            customBoxCss={customSortWordsBoxCss}
          />
        );
      } else {
        // '*'이 포함되면 0이 나오므로 false 값으로 questionBlank render
        blankIndex++;
        const blankWidth = `${choiceMaxLength * 20}px`;

        return (
          <QuestionBlank
            key={blankIndex}
            index={blankIndex}
            width={blankWidth}
            text={userAnswerList[blankIndex]}
            height={`${changePXtoVW(80)}`}
            onClickBlank={popBlankText}
            backgroundColor={renderBlankBackgroundColor(blankIndex)}
            borderColor={
              userAnswerList[blankIndex]?.length > 0
                ? colorPalette.white
                : undefined
            }
            customCss={sortWordsBlankCss}
          />
        );
      }
    });
  }, [
    choiceMaxLength,
    questions,
    userAnswerList,
    popBlankText,
    renderBlankBackgroundColor,
  ]);

  const handleClickQuizAnswer = useCallback(
    (index: number) => {
      if (
        userAnswerList.length >= answerList.length ||
        userAnswerList.indexOf(choiceList[index]) !== -1
      ) {
        return;
      }
      const findNullBlankIndex = userAnswerList.findIndex((answer) => {
        return answer === "";
      });
      if (findNullBlankIndex > -1) {
        const copyUserAnswer = [...userAnswerList];
        copyUserAnswer[findNullBlankIndex] = choiceList[index];
        setUserAnswerList(copyUserAnswer);
      } else {
        setUserAnswerList((prev) => [...prev, choiceList[index]]);
      }
    },
    [userAnswerList, choiceList, answerList]
  );

  const answerContents = useMemo(() => {
    return choiceList.map((answer, index) => {
      return (
        <WordQuizAnswer
          key={index}
          text={answer}
          index={index}
          onClickAnswer={handleClickQuizAnswer}
          color={
            userAnswerList.indexOf(answer) !== -1
              ? colorPalette.deepBlue
              : undefined
          }
        />
      );
    });
  }, [choiceList, handleClickQuizAnswer, userAnswerList]);

  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };

  const isUserAnswerCorrect = useMemo(() => {
    if (isUserAnswerFull) {
      setShowExplanation(true);
      const compareAnswer = answerList.every(
        (answer, index) => answer === userAnswerList[index]
      );
      return compareAnswer;
    } else {
      return false;
    }
  }, [answerList, userAnswerList, isUserAnswerFull]);

  return (
    <SortWordsWrapper>
      <SortWordsQuestionWrapper>{questionContents}</SortWordsQuestionWrapper>
      <SortWordsAnswerWrapper>{answerContents}</SortWordsAnswerWrapper>
      {showExplanation && (
        <Explanation
          explanation={explanation}
          isCorrect={isUserAnswerCorrect}
          handleClickClose={handleClickCloseExplanation}
        />
      )}
    </SortWordsWrapper>
  );
};

export default SortWords;
