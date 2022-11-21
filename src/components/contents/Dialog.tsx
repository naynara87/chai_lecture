import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { css } from "@emotion/react";

const DialogWrapper = styled.div`
  &.hide {
    opacity: 0.4;
  }
`;

const TalkBubbleGrp = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin: 2.0833333333vw 0;
`;

const Profile = styled.div`
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
  border: 4px solid #9b9b9b;
  border-radius: 2.7083333333vw;
  font-weight: 400;
  font-size: 1.5625vw;
  color: #9b9b9b;
  cursor: pointer;
  &:last-child {
    margin-left: 0.8333333333vw;
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

const wordCss = css`
  font-size: 1.5625vw;
  color: #6070cf;
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
  pronunciation: string;
  meaning: string;
  hasQuestion: boolean;
  choices: string[];
  isHide: boolean;
  showPinyin: boolean;
  showTranslate: boolean;
  handleChangeContent: (index: number) => void;
  getCurrentShowDialog: (dialog: HTMLCollectionOf<Element>) => void;
}

const Dialog = ({
  icon,
  index,
  text,
  pronunciation,
  meaning,
  hasQuestion,
  choices,
  isHide,
  handleChangeContent,
  getCurrentShowDialog,
  showPinyin,
  showTranslate,
}: DialogProps) => {
  const [userAnswer, setUserAnswer] = useState<number>(100);

  useEffect(() => {
    if (!isHide) {
      const dialogs = document.getElementsByClassName("dialog");
      getCurrentShowDialog(dialogs);
    }
  }, [isHide, getCurrentShowDialog]);

  const selectedAnswer = useCallback(
    (answerIndex: number) => {
      if (isHide) {
        return;
      }
      handleChangeContent(index);
      setUserAnswer(answerIndex);
    },
    [isHide, handleChangeContent, index],
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
            >
              {choice}
            </AnswerChoice>
          );
        })}
      </AnswerWrapper>
    );
  }, [choices, selectedAnswer]);

  const questionContents = useMemo(() => {
    const questions = text.replace(/<[^>]*>?/g, "").split(/(\*.*\*)/);
    return questions.map((question, index) => {
      if (question === "*blank*") {
        return <QuestionBlank key={index}>{choices[userAnswer]}</QuestionBlank>;
      } else {
        return <HtmlContentComponent key={index} html={question} customCss={wordCss} />;
      }
    });
  }, [text, userAnswer, choices]);

  return (
    <DialogWrapper className={isHide ? "hide" : "dialog"}>
      <TalkBubbleGrp>
        <Profile />
        <TalkBubble>
          <QuestionWrapper>{questionContents}</QuestionWrapper>
          {showPinyin && <HtmlContentComponent html={pronunciation} customCss={pronunciationCss} />}
          {showTranslate && <HtmlContentComponent html={meaning} customCss={meaningCss} />}
        </TalkBubble>
      </TalkBubbleGrp>
      {hasQuestion && renderQuiz}
    </DialogWrapper>
  );
};

export default Dialog;
