import React, { useEffect, useState } from "react";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import { TemplateProps } from "../../core";

interface Template02Props extends TemplateProps {
  sideCard: JSX.Element;
  wideCard: JSX.Element;
}

const Template02 = ({
  page,
  setPageCompleted,
  sideCard,
  wideCard,
}: Template02Props) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
    console.log(page);
  }, [setPageCompleted, page]);

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
