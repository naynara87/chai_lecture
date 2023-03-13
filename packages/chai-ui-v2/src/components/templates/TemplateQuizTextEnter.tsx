import React from "react";
import ComponentTitle from "../molecules/ComponentTitle";

const TemplateQuizTextEnter = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="빈칸을 채워 단어를 완성해 보세요." />
        <form method="post" className="quiz-container"></form>
      </div>
    </div>
  );
};

export default TemplateQuizTextEnter;
