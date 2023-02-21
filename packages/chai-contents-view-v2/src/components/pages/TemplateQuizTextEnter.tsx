import React from "react";
import ComponentTitle from "../molecules/ComponentTitle";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";

const TemplateQuizTextEnter = () => {

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="빈칸을 채워 단어를 완성해 보세요." />
        <form method="post" className="quiz-container">
        </form>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </div>
  );
};

export default TemplateQuizTextEnter;
