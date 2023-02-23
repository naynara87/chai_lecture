import React, { useState } from "react";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import LayoutModalSolution from "../modal/LayoutModalSolution";

interface Template02Props {
  sideCard: JSX.Element;
  wideCard: JSX.Element;
}

const Template02 = ({ sideCard, wideCard }: Template02Props) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel">{sideCard}</div>
      <div className="layout-panel wide-panel">{wideCard}</div>
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

export default Template02;
