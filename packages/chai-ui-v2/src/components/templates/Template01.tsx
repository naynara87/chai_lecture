import React, { useState } from "react";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import ComponentNumbering from "../molecules/ComponentNumbering";
import ComponentTitle from "../molecules/ComponentTitle";

const Template01 = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="‘坐 zuò’를 사용한 표현을 미리 알아봅시다." />
        <ComponentNumbering />
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
    </div>
  );
};

export default Template01;
