import React, { useState } from "react";
import { LayoutModalSolution } from "../modal";
import ComponentContsStart from "../molecules/ComponentContsStart";

const TemplatePub = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(true);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentContsStart />
        <LayoutModalSolution
          isModalOpen={isModalSolutionOpen}
          setIsModalOpen={setIsModalSolutionOpen}
        />
      </div>
    </div>
  );
};

export default TemplatePub;
