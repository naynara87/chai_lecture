import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import AudioButton from "../atoms/AudioButton";
import { DialogData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import OIcon from "../atoms/svg/OIcon";
import XIcon from "../atoms/svg/XIcon";
import QuestionBlank from "../atoms/QuestionBlank";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

interface ProfileProps {
  icon: string;
  profileColor?: string;
}

const DialogWrapper = styled.div`
  &.hide {
    opacity: 0.4;
  }
`;

const TalkBubbleGrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${changePXtoVW(40)} 0;
  `;

const Profile = styled.div<ProfileProps>`
  width: ${changePXtoVW(120)};
  height: ${changePXtoVW(120)};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.profileColor};
  color: ${(props) => props.profileColor};
  user-select: none;
  position: relative;
  z-index: 2;
  
  background: url(${(props) => props.icon});
  background-size: cover;
  background-position: center center;
  `;

const NullProfile = styled.div`
  width: ${changePXtoVW(120)};
  height: ${changePXtoVW(120)};
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  position: relative;
  z-index: 2;
  `;

interface TalkBubbleProps {
  bubbleColor?: string;
}

const TalkBubble = styled.div<TalkBubbleProps>`
  position: relative;
  min-width: ${changePXtoVW(440)};
  margin-left: ${changePXtoVW(56)};
  padding: ${changePXtoVW(20)} ${changePXtoVW(25)};
  border-radius: ${changePXtoVW(24)};
  background-color: ${(props) => props.bubbleColor};
  text-align: left;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  background: pink;

  /* >div > span {
    font-size: ${changePXtoVW(30)};
    line-height: ${changePXtoVW(45)};
  } */
  
  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    left: -42px;
    top: 40%;
    height: 18px;
    border-right: 47px solid ${(props) => props.bubbleColor};
    background: ${(props) => props.bubbleColor};
    border-top-left-radius: 111px 50px;
    transform: translate(0, -2px);
  }
  
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 30%;
    left: -22px;
    width: 52px;
    height: 30px;
    background: ${colorPalette.backgroundWhite};
    border-bottom-right-radius: 110px 50px;
    transform: translate(-30px, -2px);
  }
`;

const AnswerWrapper = styled.div`
  margin-top: ${changePXtoVW(-30)};
  margin-left: ${changePXtoVW(180)};
  text-align: left;
`;

interface AnswerChoiceProps {
  correctColor?: string;
  inCorrectColor?: string;
  choiceDefaultColor?: string;
}

const AnswerChoice = styled.div<AnswerChoiceProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${changePXtoVH(10)} ${changePXtoVW(50)};
  border: 2px solid ${(props) => props.choiceDefaultColor};
  border-radius: ${changePXtoVW(52)};
  font-weight: 400;
  font-size: ${changePXtoVW(30)};
  color: ${(props) => props.choiceDefaultColor};
  cursor: pointer;

  &:last-child {
    margin-left: ${changePXtoVW(15)};
  }

  &.correct {
    border-color: ${(props) => props.correctColor};
    color: ${(props) => props.correctColor};
  }

  &.incorrect {
    border-color: ${(props) => props.inCorrectColor};
    color: ${(props) => props.inCorrectColor};
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AudioWrapper = styled.div`
  margin-left: ${changePXtoVW(10)};
  `;

const wordCss = css`
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.black};
  `;

const pronunciationCss = css`
  margin-top: ${changePXtoVH(8)};
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.descriptionText};
  `;

const meaningCss = css`
  margin-top: ${changePXtoVH(8)};
  font-weight: 500;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.descriptionText};
  `;

const iconCss = css`
  width: ${changePXtoVW(80)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

interface DialogProps {
  dialogContent: DialogData;
  index: number;
  renderProfile: boolean;
  currentAudioIndex?: number;
  audioState?: boolean;
  isHide?: boolean;
  totalAudioPlayed?: boolean;
  showPinyin?: boolean;
  showTranslate?: boolean;
  showAudioButton?: boolean;
  audioHandler?: (src: string, index: number) => void;
  handleClickAnswer: (index: number) => void;
  correctColor?: string;
  inCorrectColor?: string;
  choiceDefaultColor?: string;
  bubbleColor?: string;
  profileColor?: string;
  isShowCorrect?: boolean;
  isBlockedCheck?: boolean;
}

const Dialog = ({
  dialogContent,
  index,
  renderProfile = true,
  totalAudioPlayed,
  isHide = false,
  audioState,
  currentAudioIndex,
  audioHandler,
  handleClickAnswer,
  showPinyin = true,
  showTranslate = true,
  showAudioButton = false,
  correctColor = `${colorPalette.deepBlue}`,
  inCorrectColor = `${colorPalette.wrongAnswer}`,
  choiceDefaultColor = `${colorPalette.dialogChoiceDefaultColor}`,
  bubbleColor = `${colorPalette.white}`,
  profileColor = `${colorPalette.deepBlue}`,
  isBlockedCheck,
  isShowCorrect = undefined,
}: DialogProps) => {
  const {
    icon,
    text,
    pronunciation,
    meaning,
    hasQuestion,
    question: dialogQuestions,
    audio,
  } = dialogContent;

  const { src: audioUrl } = audio ?? {};
  const [userAnswer, setUserAnswer] = useState<number>(dialogQuestions?.choices.length ?? 0);
  const [correct, setCorrect] = useState<undefined | boolean>(undefined);
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);
  const [sortList, setSortList] = useState<string[]>([]);
  useEffect(() => {
    if (!dialogQuestions?.choices) {
      return;
    }
    const choicesCopy = [...dialogQuestions?.choices];
    setSortList(choicesCopy.sort(() => Math.random() - 0.5));
  }, [dialogQuestions?.choices]);

  const questions = text
    .replace(/<[^>]*>?/g, "")
    .split(/(\*.*?\*)/)
    .filter((content) => {
      return content.length > 0;
    });

  const selectedAnswer = useCallback(
    (userChoiceIndex: number) => {
      if (isHide || !dialogQuestions?.choices || isShowCorrect || isBlockedCheck) {
        return;
      }
      handleClickAnswer(index);
      setUserAnswer(userChoiceIndex);
      setCorrect(
        sortList[userChoiceIndex] === dialogQuestions?.choices[dialogQuestions.answerIndex],
      );
    },
    [isHide, handleClickAnswer, dialogQuestions, index, sortList, isShowCorrect, isBlockedCheck],
  );

  const answerClassName = useCallback(
    (choice: string): string => {
      if (sortList[userAnswer] === choice) {
        if (correct) {
          return "correct";
        } else {
          return "incorrect";
        }
      } else {
        return "";
      }
    },
    [userAnswer, correct, sortList],
  );

  const renderQuiz = useMemo(() => {
    if (!dialogQuestions) {
      return;
    }
    return (
      <AnswerWrapper>
        {sortList.map((choice, index) => {
          return (
            <AnswerChoice
              correctColor={correctColor}
              inCorrectColor={
                isShowCorrect === undefined || isShowCorrect ? inCorrectColor : correctColor
              }
              choiceDefaultColor={choiceDefaultColor}
              key={index}
              onClick={() => {
                selectedAnswer(index);
              }}
              className={answerClassName(choice)}
            >
              {choice}
            </AnswerChoice>
          );
        })}
      </AnswerWrapper>
    );
  }, [
    selectedAnswer,
    answerClassName,
    dialogQuestions,
    correctColor,
    inCorrectColor,
    choiceDefaultColor,
    isShowCorrect,
    sortList,
  ]);

  const showCorrectIcon = useMemo(() => {
    if (!isShowCorrect) {
      return;
    }

    if (correct) {
      return <OIcon css={iconCss} />;
    } else if (correct === undefined) {
      return "";
    } else {
      return <XIcon css={iconCss} />;
    }
  }, [correct, isShowCorrect]);

  const questionContents = useMemo(() => {
    if (!questions) {
      return <></>;
    }
    if (dialogQuestions) {
      dialogQuestions.choices.forEach((choice) => {
        if (choice.length > choiceMaxLength) {
          setChoiceMaxLength(choice.length);
        }
      });
    }
    return questions.map((question, questionIndex) => {
      if (question === "*blank*") {
        const blankWidth = `${choiceMaxLength * 25}px`;
        if (!dialogQuestions) {
          return <></>;
        }
        return <QuestionBlank key={questionIndex} width={blankWidth} text={sortList[userAnswer]} />;
      } else {
        return <HtmlContentComponent key={questionIndex} html={question} customCss={wordCss} />;
      }
    });
  }, [userAnswer, dialogQuestions, sortList, choiceMaxLength, questions]);

  return (
    <DialogWrapper className={isHide ? "hide" : "dialog"}>
      <TalkBubbleGrp>
        {renderProfile ? (
          <Profile icon={icon.src ?? ""} profileColor={profileColor}>
            {showCorrectIcon}
          </Profile>
        ) : (
          <NullProfile />
        )}
        <TalkBubble bubbleColor={bubbleColor}>
          <QuestionWrapper>{questionContents}</QuestionWrapper>
          {showPinyin && <HtmlContentComponent html={pronunciation} customCss={pronunciationCss} />}
          {showTranslate && <HtmlContentComponent html={meaning} customCss={meaningCss} />}
        </TalkBubble>
        {showAudioButton && (
          <AudioWrapper>
            <AudioButton
              otherAudioPlayed={totalAudioPlayed}
              audioUrl={audioUrl}
              audioHide={isHide}
              audioState={audioState}
              audioIndex={index + 1}
              audioHandler={audioHandler}
              isAudio={false}
              currentAudioIndex={currentAudioIndex}
            />
          </AudioWrapper>
        )}
      </TalkBubbleGrp>
      {hasQuestion && renderQuiz}
    </DialogWrapper>
  );
};

export default Dialog;
