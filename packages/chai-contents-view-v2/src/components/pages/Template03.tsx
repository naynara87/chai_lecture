import React, { useState } from "react";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRoleplay from "../molecules/ComponentRoleplay";

const Template03 = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="지난 시간엔 성조의 변화에 대해 학습했어요. 내용이 맞으면 O, 틀리면 X를 선택하세요." />
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
