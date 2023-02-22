import { ComponentVideo } from "chai-ui-v2";
import React, { useState } from "react";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import ComponentTitle from "../molecules/ComponentTitle";

const Template01 = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(true);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="무슨 이야기를 하고 있을까요?" />
        <ComponentVideo videoUrl="https://cdn.bubblecon.co.kr/videos/45.mp4" />
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

export default Template01;
