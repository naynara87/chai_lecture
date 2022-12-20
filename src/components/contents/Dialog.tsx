import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import AudioButton from "../atoms/AudioButton";
import { DialogData, MultiChoice } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import OIcon from "../atoms/svg/OIcon";
import XIcon from "../atoms/svg/XIcon";
import QuestionBlank from "../atoms/QuestionBlank";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import DialogTextBoxes from "../molecules/DialogTextBoxes";

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

  &:before {
    content: "";
    position: absolute;
    left: -42px;
    top: 40%;
    height: 18px;
    z-index: -1;
    border-right: 47px solid ${(props) => props.bubbleColor};
    background: ${(props) => props.bubbleColor};
    border-top-left-radius: 111px 50px;
    transform: translate(0, -2px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 30%;
    left: -22px;
    width: 52px;
    z-index: -1;
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
  color: ${colorPalette.descriptionText};
  > p {
    font-size: ${changePXtoVW(24)} !important;
  }
`;

const meaningCss = css`
  margin-top: ${changePXtoVH(8)};
  font-weight: 500;
  color: ${colorPalette.descriptionText};

  > p {
    font-size: ${changePXtoVW(24)} !important;
  }
`;

const iconCss = css`
  width: ${changePXtoVW(80)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const blankCss = css`
  color: ${colorPalette.deepBlue};
`;

const MultiChoicesAnswerWrapper = styled.div``;

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
  const [userAnswer, setUserAnswer] = useState<number>(dialogQuestions?.choices?.length ?? 0);
  const [userMultiChoicesAnswer, setUserMultiChoicesAnswer] = useState<MultiChoice[]>([]);
  const [correct, setCorrect] = useState<undefined | boolean>(undefined);
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);
  const [sortChoiceList, setSortChoiceList] = useState<string[]>([]);
  const [sortMultiChoiceList, setSortMultiChoiceList] = useState<MultiChoice[]>([]);

  useEffect(() => {
    if (!dialogQuestions?.choices) {
      return;
    }
    const choicesCopy = [...dialogQuestions?.choices];
    setSortChoiceList(choicesCopy.sort(() => Math.random() - 0.5));
  }, [dialogQuestions?.choices]);

  useEffect(() => {
    if (!dialogQuestions?.multiChoices) {
      return;
    }
    const choicesCopy = [...dialogQuestions?.multiChoices];
    setSortMultiChoiceList(choicesCopy.sort(() => Math.random() - 0.5));
  }, [dialogQuestions?.multiChoices]);

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
      if (dialogQuestions.answerIndex !== undefined) {
        setCorrect(
          sortChoiceList[userChoiceIndex] === dialogQuestions?.choices[dialogQuestions.answerIndex],
        );
      }
    },
    [
      isHide,
      handleClickAnswer,
      dialogQuestions,
      index,
      sortChoiceList,
      isShowCorrect,
      isBlockedCheck,
    ],
  );

  const selectedMultiChoiceAnswer = useCallback((choice: MultiChoice) => {
    setUserMultiChoicesAnswer((prev) => [...prev, choice]);
  }, []);

  const answerClassName = useCallback(
    (choice: string): string => {
      if (sortChoiceList[userAnswer] === choice) {
        if (correct) {
          return "correct";
        } else {
          return "incorrect";
        }
      } else {
        return "";
      }
    },
    [userAnswer, correct, sortChoiceList],
  );

  const renderChoicesQuiz = useMemo(() => {
    if (!dialogQuestions) {
      return;
    }
    return (
      <AnswerWrapper>
        {sortChoiceList.map((choice, index) => {
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
    sortChoiceList,
  ]);

  const handleClickTextBox = useCallback(
    (choice: MultiChoice) => {
      selectedMultiChoiceAnswer(choice);
    },
    [selectedMultiChoiceAnswer],
  );

  const renderMultiChoicesQuiz = useMemo(() => {
    return (
      <MultiChoicesAnswerWrapper>
        <DialogTextBoxes
          datas={sortMultiChoiceList}
          onClickTextBox={handleClickTextBox}
          userSelectedChoice={userMultiChoicesAnswer}
        />
      </MultiChoicesAnswerWrapper>
    );
  }, [sortMultiChoiceList, handleClickTextBox, userMultiChoicesAnswer]);

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
    if (dialogQuestions?.choices) {
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
        return (
          <QuestionBlank
            key={questionIndex}
            width={blankWidth}
            text={sortChoiceList[userAnswer]}
            customCss={blankCss}
          />
        );
      } else {
        return <HtmlContentComponent key={questionIndex} html={question} customCss={wordCss} />;
      }
    });
  }, [userAnswer, dialogQuestions, sortChoiceList, choiceMaxLength, questions]);

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
          {showPinyin && pronunciation && (
            <HtmlContentComponent html={pronunciation} customCss={pronunciationCss} />
          )}
          {showTranslate && meaning && (
            <HtmlContentComponent html={meaning} customCss={meaningCss} />
          )}
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
      <>
        {hasQuestion && renderChoicesQuiz}
        {hasQuestion && renderMultiChoicesQuiz}
      </>
    </DialogWrapper>
  );
};

export default Dialog;
