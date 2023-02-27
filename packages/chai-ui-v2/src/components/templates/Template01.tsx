import React, { useState } from "react";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import ComponentGrayLine from "../molecules/ComponentGrayLine";
import ComponentTitle from "../molecules/ComponentTitle";
import ComponentTraining from "../molecules/ComponentTraining";

const Template01 = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="이번 레슨에서는 이런 걸 배울 거예요." />
        <ComponentGrayLine />
        <ComponentTraining />
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
    </div>
  );
};

export default Template01;
