import React, { useState } from "react";
import IconDictionaryFillButton from "../atoms/Button/IconDictionaryFillButton";
import { LayoutModalSolution } from "../modal";
import ComponentContsStart from "../molecules/ComponentContsStart";

const TemplatePub = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(true);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentContsStart />
        <IconDictionaryFillButton />
        <LayoutModalSolution
          isModalOpen={isModalSolutionOpen}
          setIsModalOpen={setIsModalSolutionOpen}
        />
      </div>
    </div>
  );
};

export default TemplatePub;
