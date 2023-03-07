import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import {
  TemplateProps,
  TemplateQuizMultiChoiceData,
  useContentMapper,
} from "../../core";
import MultiChoiceComponent from "../contents/MultiChoiceComponent";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import ComponentGrayLine from "../molecules/ComponentGrayLine";

const QuizContainer = styled.div``;

interface TemplateQuizMultiChoiceProps extends TemplateProps {}

const TemplateQuizMultiChoice = ({
  template,
  setPageCompleted,
}: TemplateQuizMultiChoiceProps) => {
  const thisPage = template as TemplateQuizMultiChoiceData;

  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

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
          {/* FIXME 저작도구에서 글자크기에대해 입력시 고려해야함. */}
          {/* <div className="quiz-question-wrap">
            <p className="text-md">{`제3성이 연이어 나올 때, 올바르게 발음한 것을 고르세요.`}</p>
            <p className="text-lg">{`在`}</p>
          </div> */}

          <ComponentGrayLine contents={thisPage.rightContents.borderContents} />
          {/* TODO: key설명 - 클릭하면 input들 disabled 되고, 
          정답이면 answer-right 오답이면 answer-wrong 클래스 추가 */}
          <MultiChoiceComponent contents={thisPage.rightContents.multiChoice} />
          {/* <GrayRadioBoxes /> */}
        </QuizContainer>
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
      <LayoutModalVoca
        isModalOpen={isModalVocaOpen}
        setIsModalOpen={setIsModalVocaOpen}
      />
    </div>
  );
};

export default TemplateQuizMultiChoice;
