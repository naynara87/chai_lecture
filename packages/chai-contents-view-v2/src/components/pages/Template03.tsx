import React, { useState } from "react";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRoleplay from "../molecules/ComponentRoleplay";

const Template03 = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap grid-37">
      <div className="layout-panel side-panel">
        <ComponentContsInfo />
      </div>
      <div className="layout-panel wide-panel">
        <ComponentRoleplay />
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

export default Template03;
