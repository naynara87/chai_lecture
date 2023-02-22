import React, { useEffect, useState } from "react";
import { TemplateProps } from "../../core";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRoleplay from "../molecules/ComponentRoleplay";

interface Template03Props extends TemplateProps {}

const Template03 = ({ page, setPageCompleted }: Template03Props) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
    console.log(page);
  }, [setPageCompleted, page]);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
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
