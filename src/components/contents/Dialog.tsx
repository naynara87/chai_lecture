import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../contents/HtmlContentComponent";
import { css } from "@emotion/react";
import AudioButton from "../atoms/AudioButton";
import { DialogData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin: 2.0833333333vw 0;
`;

const Profile = styled.div<ProfileProps>`
  width: ${changePXtoVW(120)};
  height: ${changePXtoVW(120)};
  border-radius: 50%;
  overflow: hidden;
  background-color: #6070cf;
  color: #6070cf;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  margin-left: 2.9166666667vw;
  padding: ${changePXtoVW(20)} ${changePXtoVW(25)};
  border-radius: 1.25vw;
  background-color: ${(props) => props.bubbleColor};
  text-align: left;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);

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
    background: #f5f5f5;
    -webkit-border-bottom-right-radius: 110px 50px;
    -moz-border-radius-bottomright: 110px 50px;
    border-bottom-right-radius: 110px 50px;
    -webkit-transform: translate(-30px, -2px);
    -moz-transform: translate(-30px, -2px);
    -ms-transform: translate(-30px, -2px);
    -o-transform: translate(-30px, -2px);
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
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: ${changePXtoVH(10)} ${changePXtoVW(50)};
  border: 2px solid ${(props) => props.choiceDefaultColor};
  border-radius: 2.7083333333vw;
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

const QuestionBlank = styled.span`
  position: relative;
  display: inline-block;
  width: 60px;
  min-width: 5vw;
  height: 25px;
  margin-right: 8px;
  margin-left: 8px;
  border: 3px dashed #9b9b9b;
  border-radius: 0.625vw;
  background-color: #ffffff;
  color: #40476b;
  text-align: center;
  user-select: none;
  transform: translateY(-7%);
`;

const AudioWrapper = styled.div`
  margin-left: 10px;
`;

const wordCss = css`
  font-size: 1.5625vw;
  color: #222222;
`;

const pronunciationCss = css`
  margin-top: 0.4166666667vh;
  font-size: 1.25vw;
  font-size: 13px;
  color: #666666;
`;

const meaningCss = css`
  font-size: 1.25vw;
  color: #666666;
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
  showAudioButton,
  correctColor = "#40476b",
  inCorrectColor = "#f65555",
  choiceDefaultColor = "#9b9b9b",
  bubbleColor = "#fff",
  profileColor = "#40476b",
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
  const { src: audioUrl } = audio;
  const [userAnswer, setUserAnswer] = useState<number>(dialogQuestions?.choices.length ?? 0);
  const [correct, setCorrect] = useState<undefined | boolean>(undefined);
  const [choiceMaxLength, setChoiceMaxLength] = useState(0);

  const selectedAnswer = useCallback(
    (userChoiceIndex: number) => {
      if (isHide || (dialogQuestions && userAnswer < dialogQuestions.choices.length)) {
        return;
      }
      handleClickAnswer(index);
      setUserAnswer(userChoiceIndex);
      setCorrect(userChoiceIndex === dialogQuestions?.answerIndex);
    },
    [isHide, handleClickAnswer, index, userAnswer, dialogQuestions],
  );

  const answerClassName = useCallback(
    (choice: string): string => {
      if (dialogQuestions?.choices[userAnswer] === choice) {
        if (correct) {
          return "correct";
        } else {
          return "incorrect";
        }
      } else {
        return "";
      }
    },
    [userAnswer, correct, dialogQuestions],
  );

  const renderQuiz = useMemo(() => {
    if (!dialogQuestions) {
      return;
    }
    return (
      <AnswerWrapper>
        {dialogQuestions.choices.map((choice, index) => {
          return (
            <AnswerChoice
              correctColor={correctColor}
              inCorrectColor={inCorrectColor}
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
  ]);

  const questionContents = useMemo(() => {
    const questions = text.replace(/<[^>]*>?/g, "").split(/(\*.*\*)/);
    return questions.map((question, index) => {
      if (question === "*blank*") {
        if (!dialogQuestions) {
          return <></>;
        }
        dialogQuestions.choices.forEach((choice) => {
          if (choice.length > choiceMaxLength) {
            setChoiceMaxLength(choice.length);
          }
        });
        const blankWidth = `${choiceMaxLength * 25}px`;
        return (
          <QuestionBlank key={index} style={{ width: blankWidth }}>
            {dialogQuestions.choices[userAnswer]}
          </QuestionBlank>
        );
      } else {
        return <HtmlContentComponent key={index} html={question} customCss={wordCss} />;
      }
    });
  }, [text, userAnswer, dialogQuestions, choiceMaxLength]);

  return (
    <DialogWrapper className={isHide ? "hide" : "dialog"}>
      <TalkBubbleGrp>
        {renderProfile ? (
          <Profile icon={icon.src ?? ""} profileColor={profileColor} />
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
