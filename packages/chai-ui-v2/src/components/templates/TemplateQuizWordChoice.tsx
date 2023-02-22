import React, { useEffect, useState } from "react";
import { TemplateProps } from "../../core";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";

interface TemplateQuizWordChoiceProps extends TemplateProps {}

const TemplateQuizWordChoice = ({
  page,
  setPageCompleted,
}: TemplateQuizWordChoiceProps) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
    console.log(page);
  }, [setPageCompleted, page]);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">1234</div>
      <div className="layout-panel wide-panel">asdf</div>
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

export default TemplateQuizWordChoice;
