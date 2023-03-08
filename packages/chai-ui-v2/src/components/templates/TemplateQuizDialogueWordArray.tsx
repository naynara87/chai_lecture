import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { vh, vw } from "../../assets";
import {
  TemplateProps,
  TemplateQuizWordsInOrderData,
  useContentMapper,
} from "../../core";
import WordsInOrderComponent from "../contents/WordsInOrderComponent";

const QuizContainer = styled.div`
  .quiz-question-wrap {
    .btn-icon {
      margin-top: ${vh(40)};
    }
  }

  .conversation-wrap .img-wrap {
    margin-right: 0;
  }

  .hori-answer-wrap .inp-grp {
    flex-basis: auto;
  }

  .label-chck-line .text {
    font-size: ${vw(22)};
  }

  > .btns-wrap {
    max-width: 382px;
    margin: 0 auto;

    .btn {
      height: ${vh(62)};
      font-size: ${vw(22)};
    }
  }
`;

interface TemplateQuizDialogueWordArrayProps extends TemplateProps {}

const TemplateQuizDialogueWordArray = ({
  template,
  setPageCompleted,
}: TemplateQuizDialogueWordArrayProps) => {
  const thisPage = template as TemplateQuizWordsInOrderData;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  const leftContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      return getContentComponent(leftContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">{leftContents}</div>
      <div className="layout-panel wide-panel">
        <QuizContainer className="quiz-container">
          <WordsInOrderComponent contents={thisPage.rightContents} />
        </QuizContainer>
      </div>
    </div>
  );
};

export default TemplateQuizDialogueWordArray;
