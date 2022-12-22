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
import { sortChoices } from "../../utils/sortChoices";

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
  cursor: pointer;
`;

const blankWhiteColorText = css`
  color: ${colorPalette.backgroundWhite};
`;

const MultiChoicesAnswerWrapper = styled.div``;

const MultiChoicePronunciationWrapper = styled.div`
  display: flex;
  gap: 2%;
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
  const [userAnswer, setUserAnswer] = useState<number>(dialogQuestions?.choices?.length ?? 0);
  const [userSelectedMultiChoices, setUserSelectedMultiChoices] = useState<MultiChoice[]>([]);
  const [userSelectedIndexes, setUserSelectedIndexes] = useState<(number | undefined)[]>([]);
  const [correct, setCorrect] = useState<undefined | boolean>(undefined);
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);
  const [sortChoiceList, setSortChoiceList] = useState<string[]>([]);
  const [sortMultiChoiceList, setSortMultiChoiceList] = useState<MultiChoice[]>([]);

  useEffect(() => {
    if (dialogQuestions?.multiChoices) {
      sortChoices(dialogQuestions?.multiChoices, setSortMultiChoiceList);
    } else if (dialogQuestions?.choices) {
      sortChoices(dialogQuestions.choices, setSortChoiceList);
    }
    if (!dialogQuestions?.choices) {
      return;
    }
  }, [dialogQuestions?.choices, dialogQuestions?.multiChoices]);

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

  const isSameClickBox = useCallback(
    (index: number) => {
      if (userSelectedIndexes.includes(index)) {
        return true;
      } else {
        return false;
      }
    },
    [userSelectedIndexes],
  );

  const changeSelectedAnswer = useCallback(
    (addAndDeleted: "add" | "del", changeIndex: number, clickIndex?: number) => {
      const copyUserSelectedIndexesList = [...userSelectedIndexes];
      const copyUserSelectedAnswerList = [...userSelectedMultiChoices];
      if (addAndDeleted === "add" && clickIndex !== undefined) {
        copyUserSelectedIndexesList[changeIndex] = clickIndex;
        copyUserSelectedAnswerList[changeIndex] = sortMultiChoiceList[clickIndex];
      } else {
        copyUserSelectedIndexesList[changeIndex] = undefined;
        copyUserSelectedAnswerList[changeIndex] = { text: "", pronunciation: "", answerIndex: -1 };
      }

      setUserSelectedIndexes(copyUserSelectedIndexesList);
      setUserSelectedMultiChoices(copyUserSelectedAnswerList);
    },
    [sortMultiChoiceList, userSelectedIndexes, userSelectedMultiChoices],
  );

  const handleClickTextBox = useCallback(
    (choice: MultiChoice, index: number) => {
      if (isSameClickBox(index)) {
        const sameIndex = userSelectedMultiChoices.findIndex((userSelected, index) => {
          return JSON.stringify(userSelected) === JSON.stringify(choice);
        });
        changeSelectedAnswer("del", sameIndex);
        return;
      }

      const emptyIndex = userSelectedIndexes.findIndex((SelectedIndex, index) => {
        return SelectedIndex === undefined;
      });

      // userSelectdIndexes에 undefindex 값이 있으면 -1
      if (emptyIndex !== -1) {
        changeSelectedAnswer("add", emptyIndex, index);
      } else {
        setUserSelectedMultiChoices((prev) => [...prev, choice]);
        setUserSelectedIndexes((prev) => [...prev, index]);
      }
    },
    [userSelectedIndexes, userSelectedMultiChoices, isSameClickBox, changeSelectedAnswer],
  );

  const renderChoicesQuiz = useMemo(() => {
    if (!dialogQuestions) {
      return;
    }
    if (dialogQuestions.multiChoices) {
      return (
        <MultiChoicesAnswerWrapper>
          <DialogTextBoxes
            multiChoices={sortMultiChoiceList}
            onClickTextBox={handleClickTextBox}
            blankLength={questions.length}
            userSelectedIndexes={userSelectedIndexes}
          />
        </MultiChoicesAnswerWrapper>
      );
    } else if (dialogQuestions.choices) {
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
    }
  }, [
    selectedAnswer,
    answerClassName,
    handleClickTextBox,
    dialogQuestions,
    correctColor,
    inCorrectColor,
    choiceDefaultColor,
    isShowCorrect,
    sortChoiceList,
    questions.length,
    sortMultiChoiceList,
    userSelectedIndexes,
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

  const blankText = useCallback(
    (blankIndex: number) => {
      if (dialogQuestions?.multiChoices) {
        return userSelectedMultiChoices[blankIndex]?.text ?? "";
      } else {
        return sortChoiceList[userAnswer];
      }
    },
    [dialogQuestions?.multiChoices, sortChoiceList, userSelectedMultiChoices, userAnswer],
  );

  const setMaxBlankLength = useCallback(
    (text: string) => {
      if (text.length > choiceMaxLength) {
        setChoiceMaxLength(text.length);
      }
    },
    [setChoiceMaxLength, choiceMaxLength],
  );

  const isMultiChoicesUserAnswerFull = useMemo(() => {
    return (
      userSelectedMultiChoices.length > 0 && userSelectedMultiChoices.length >= questions.length
    );
  }, [userSelectedMultiChoices, questions]);

  const renderBlankBackgroundColor = useCallback(
    (findIndex: number): string | undefined => {
      if (isMultiChoicesUserAnswerFull) {
        if (!userSelectedMultiChoices[findIndex]) {
          return;
        }
        if (userSelectedMultiChoices[findIndex].answerIndex === findIndex) {
          return colorPalette.deepBlue;
        } else {
          return colorPalette.wrongAnswer;
        }
      } else {
        return undefined;
      }
    },
    [isMultiChoicesUserAnswerFull, userSelectedMultiChoices],
  );

  const popBlankText = useCallback(
    (blankIndex: number) => {
      if (userSelectedIndexes.length >= questions.length) {
        return;
      }
      changeSelectedAnswer("del", blankIndex);
    },
    [userSelectedIndexes, questions.length, changeSelectedAnswer],
  );

  const questionContents = useMemo(() => {
    if (!questions) {
      return <></>;
    }
    if (dialogQuestions?.choices) {
      dialogQuestions.choices.forEach((choice) => {
        setMaxBlankLength(choice);
      });
    } else if (dialogQuestions?.multiChoices) {
      dialogQuestions.multiChoices.forEach((choice) => {
        setMaxBlankLength(choice.text);
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
            index={questionIndex}
            width={blankWidth}
            text={blankText(questionIndex)}
            customCss={
              userSelectedMultiChoices?.length >= questions.length ? blankWhiteColorText : blankCss
            }
            onClickBlank={popBlankText}
            backgroundColor={renderBlankBackgroundColor(questionIndex)}
            borderColor={
              userSelectedMultiChoices?.length >= questions.length ? colorPalette.white : undefined
            }
          />
        );
      } else {
        return <HtmlContentComponent key={questionIndex} html={question} customCss={wordCss} />;
      }
    });
  }, [
    dialogQuestions,
    choiceMaxLength,
    questions,
    blankText,
    setMaxBlankLength,
    popBlankText,
    userSelectedMultiChoices,
    renderBlankBackgroundColor,
  ]);

  const renderPronunciation = useMemo(() => {
    if (dialogQuestions?.multiChoices) {
      return (
        <MultiChoicePronunciationWrapper>
          {userSelectedMultiChoices.map((userSelected, index) => {
            return (
              <HtmlContentComponent
                html={userSelected.pronunciation}
                customCss={pronunciationCss}
              />
            );
          })}
        </MultiChoicePronunciationWrapper>
      );
    } else if (showPinyin && pronunciation) {
      return <HtmlContentComponent html={pronunciation} customCss={pronunciationCss} />;
    }
  }, [dialogQuestions?.multiChoices, pronunciation, showPinyin, userSelectedMultiChoices]);

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
          {renderPronunciation}
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
      <>{hasQuestion && renderChoicesQuiz}</>
    </DialogWrapper>
  );
};

export default Dialog;
