import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { SortWordsData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import QuestionBlank from "../atoms/QuestionBlank";
import TextBox from "../atoms/TextBox";
import WordQuizAnswer from "../atoms/WordQuizAnswer";
import Explanation from "../molecules/Explanation";

const SortWordsWrapper = styled.div`
  margin-left: ${changePXtoVW(40)};
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${changePXtoVH(32)} ${changePXtoVW(30)};
  flex-wrap: wrap;
  margin-top: ${changePXtoVH(32)};
  /* height: ${changePXtoVW(200)}; */
`;

const customBoxCss = css`
  width: auto;
  padding: ${changePXtoVW(20)};
  height: ${changePXtoVW(96)};
  font-size: ${changePXtoVW(40)};
`;

const blankCss = css`
  /* color: ${colorPalette.white}; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${changePXtoVW(30)};
  cursor: pointer;
`;

interface SortWordsProps {
  datas: SortWordsData[];
}

const SortWords = ({ datas }: SortWordsProps) => {
  const { text, fakeChoices, explanation } = datas?.[0];
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);
  const [userAnswerList, setUserAnswerList] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [choiceList, setChoiceList] = useState<string[]>([]);
  const [answerList, setAnswerList] = useState<string[]>([]);
  const questions = text
    .replace(/<[^>]*>?/g, "")
    .split(/(\*.*?\*)/)
    .filter((content) => {
      return content.length > 0;
    });

  const isUserAnswerFull = useMemo(() => {
    return answerList.length > 0 && userAnswerList.length >= answerList.length;
  }, [answerList, userAnswerList]);

  const firstAnswerRender = useCallback(() => {
    if (answerList.length > 0) {
      return;
    }
    const list: string[] = [];
    if (fakeChoices) {
      setChoiceList(fakeChoices);
    }
    questions.forEach((question) => {
      if (!question.indexOf("*")) {
        const rePlaceQuestion = question.replace(/\*[^>]*?/g, "");
        setChoiceList((prev) => [...prev, rePlaceQuestion]);
        list.push(rePlaceQuestion);
      }
    });
    setAnswerList(list);
    setChoiceList((prev) => prev.sort(() => Math.random() - 0.5));
  }, [fakeChoices, questions, answerList]);

  useEffect(() => {
    firstAnswerRender();
  }, [firstAnswerRender]);

  const popBlankText = useCallback(
    (text: string) => {
      if (userAnswerList.length >= answerList.length) {
        return;
      }
      const blankIndex = userAnswerList.findIndex((answer) => {
        return answer === text;
      });
      const copyUserAnswerList = [...userAnswerList];
      copyUserAnswerList[blankIndex] = "";

      setUserAnswerList(copyUserAnswerList);
    },
    [userAnswerList, answerList],
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
    [userAnswerList, answerList, isUserAnswerFull],
  );

  const questionContents = useMemo(() => {
    questions.forEach((question, index) => {
      if (question.length > choiceMaxLength) {
        setChoiceMaxLength(question.length);
      }
    });
    let blankIndex = -1;
    return questions.map((question, index) => {
      // *한자1*, 한자2, *한자3*
      if (question.indexOf("*") !== 0) {
        // '*'가 포함되지 않으면 -1이 나오므로 TextBox render
        return <TextBox key={index} text={question} customBoxCss={customBoxCss} />;
      } else {
        // '*'이 포함되면 0이 나오므로 false 값으로 questionBlank render
        blankIndex++;
        const blankWidth = `${choiceMaxLength * 20}px`;

        return (
          <QuestionBlank
            key={index}
            index={index}
            width={blankWidth}
            text={userAnswerList[blankIndex]}
            height={`${changePXtoVW(80)}`}
            onClickBlank={popBlankText}
            backgroundColor={renderBlankBackgroundColor(blankIndex)}
            borderColor={userAnswerList[blankIndex]?.length > 0 ? colorPalette.white : undefined}
            customCss={blankCss}
          />
        );
      }
    });
  }, [choiceMaxLength, questions, userAnswerList, popBlankText, renderBlankBackgroundColor]);

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
    [userAnswerList, choiceList, answerList],
  );

  const answerContents = useMemo(() => {
    return choiceList.map((answer, index) => {
      return (
        <WordQuizAnswer
          key={index}
          text={answer}
          index={index}
          onClickAnswer={handleClickQuizAnswer}
          color={userAnswerList.indexOf(answer) !== -1 ? colorPalette.deepBlue : undefined}
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
      const compareAnswer = answerList.every((answer, index) => answer === userAnswerList[index]);
      return compareAnswer;
    } else {
      return false;
    }
  }, [answerList, userAnswerList, isUserAnswerFull]);

  return (
    <SortWordsWrapper>
      <QuestionWrapper>{questionContents}</QuestionWrapper>
      <AnswerWrapper>{answerContents}</AnswerWrapper>
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
