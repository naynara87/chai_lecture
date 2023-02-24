import React, { useState } from "react";
import ComponentTitle from "../molecules/ComponentTitle";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";

const TemplateQuizTextEnter = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="빈칸을 채워 단어를 완성해 보세요." />
        <form method="post" className="quiz-container"></form>
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

export default TemplateQuizTextEnter;
