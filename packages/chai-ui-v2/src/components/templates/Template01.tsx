import { ComponentVideo } from "chai-ui-v2";
import React, { useEffect, useState } from "react";
import { TemplateProps } from "../../core";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import ComponentTitle from "../molecules/ComponentTitle";

interface Template01Props extends TemplateProps {}

const Template01 = ({ page, setPageCompleted }: Template01Props) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
    console.log(page);
  }, [setPageCompleted, page]);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="무슨 이야기를 하고 있을까요?" />
        <ComponentVideo videoUrl="https://cdn.bubblecon.co.kr/videos/45.mp4" />
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

export default Template01;
