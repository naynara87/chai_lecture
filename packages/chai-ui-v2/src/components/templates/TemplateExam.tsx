import React from "react";
import ComponentTitle from "../molecules/ComponentTitle";

const TemplateExam = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="무슨 이야기를 하고 있을까요?" />
        {/* <ComponentVideo videoUrl="https://cdn.bubblecon.co.kr/videos/45.mp4" /> */}
      </div>
      {/* <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      /> */}
    </div>
  );
};

export default TemplateExam;
