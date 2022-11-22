import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { css } from "@emotion/react";
import AudioButton from "../atoms/AudioButton";

interface PropfileProps {
  icon: string;
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

const Profile = styled.div<PropfileProps>`
  width: 6.25vw;
  height: 6.25vw;
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
  width: 6.25vw;
  height: 6.25vw;
  border-radius: 50%;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  z-index: 2;
`;

const TalkBubble = styled.div`
  position: relative;
  min-width: 16.6666666667vw;
  margin-left: 2.9166666667vw;
  padding: 1.1111111111vh 1.3541666667vw;
  border-radius: 1.25vw;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    left: -42px;
    top: 40%;
    height: 18px;
    border-right: 47px solid #fff;
    background: #fff;
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
  margin-top: -1.875vh;
  margin-left: 9.1666666667vw;
  text-align: left;
`;

const AnswerChoice = styled.div`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.5555555556vh 2.5vw;
  border: 2px solid #9b9b9b;
  border-radius: 2.7083333333vw;
  font-weight: 400;
  font-size: 1.5625vw;
  color: #9b9b9b;
  cursor: pointer;
  &:last-child {
    margin-left: 0.8333333333vw;
  }

  &.correct {
    border-color: #40476b;
    color: #40476b;
  }

  &.incorrect {
    border-color: #f65555;
    color: #f65555;
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
  icon?: string;
  text: string;
  index: number;
  renderProfile: boolean;
  pronunciation: string;
  meaning: string;
  hasQuestion: boolean;
  audioUrl: string;
  currentAudioIndex: number;
  choices: string[];
  answerIndex: number;
  audioState: boolean;
  isHide: boolean;
  totalAudioPlayed: boolean;
  showPinyin: boolean;
  showTranslate: boolean;
  audioHandler: (src: string, index: number) => void;
  handleChangeContent: (index: number) => void;
  getCurrentShowDialog: (dialog: HTMLCollectionOf<Element>) => void;
}

const Dialog = ({
  icon,
  index,
  text,
  pronunciation,
  meaning,
  renderProfile,
  hasQuestion,
  choices,
  answerIndex,
  totalAudioPlayed,
  isHide,
  audioUrl,
  audioState,
  currentAudioIndex,
  audioHandler,
  handleChangeContent,
  getCurrentShowDialog,
  showPinyin,
  showTranslate,
}: DialogProps) => {
  const [userAnswer, setUserAnswer] = useState<number>(100);
  const [correct, setCorrect] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    if (!isHide) {
      const dialogs = document.getElementsByClassName("dialog");
      getCurrentShowDialog(dialogs);
    }
  }, [isHide, getCurrentShowDialog]);

  const selectedAnswer = useCallback(
    (userChoiceIndex: number) => {
      if (isHide || userAnswer < 2) {
        return;
      }
      handleChangeContent(index);
      setUserAnswer(userChoiceIndex);
      setCorrect(userChoiceIndex === answerIndex);
    },
    [isHide, handleChangeContent, index, answerIndex, userAnswer],
  );

  const answerClassName = useCallback(
    (choice: string): string => {
      if (choices[userAnswer] === choice) {
        if (correct) {
          return "correct";
        } else {
          return "incorrect";
        }
      } else {
        return "";
      }
    },
    [choices, userAnswer, correct],
  );

  const renderQuiz = useMemo(() => {
    return (
      <AnswerWrapper>
        {choices.map((choice, index) => {
          return (
            <AnswerChoice
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
  }, [choices, selectedAnswer, answerClassName]);

  const questionContents = useMemo(() => {
    const questions = text.replace(/<[^>]*>?/g, "").split(/(\*.*\*)/);
    return questions.map((question, index) => {
      if (question === "*blank*") {
        const blankWidth = `${Math.max(choices[0].length, choices[1].length) * 25}px`;
        return (
          <QuestionBlank key={index} style={{ width: blankWidth }}>
            {choices[userAnswer]}
          </QuestionBlank>
        );
      } else {
        return <HtmlContentComponent key={index} html={question} customCss={wordCss} />;
      }
    });
  }, [text, userAnswer, choices]);

  return (
    <DialogWrapper className={isHide ? "hide" : "dialog"}>
      <TalkBubbleGrp>
        {renderProfile ? <Profile icon={icon ?? ""} /> : <NullProfile />}
        <TalkBubble>
          <QuestionWrapper>{questionContents}</QuestionWrapper>
          {showPinyin && <HtmlContentComponent html={pronunciation} customCss={pronunciationCss} />}
          {showTranslate && <HtmlContentComponent html={meaning} customCss={meaningCss} />}
        </TalkBubble>
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
      </TalkBubbleGrp>
      {hasQuestion && renderQuiz}
    </DialogWrapper>
  );
};

export default Dialog;
