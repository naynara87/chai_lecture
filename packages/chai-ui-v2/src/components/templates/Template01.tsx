import React, { useState } from "react";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import { ComponentChoiceRole } from "../molecules";
import ComponentTitle from "../molecules/ComponentTitle";

const Template01 = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="회화 속 주인공이 되어 말하기 연습을 해보세요." />
        <ComponentChoiceRole />
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
    </div>
  );
};

export default Template01;
