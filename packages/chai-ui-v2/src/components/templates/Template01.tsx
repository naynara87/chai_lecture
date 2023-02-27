import React, { useEffect, useMemo, useState } from "react";
import { PageProps, Template01Data } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";
import LayoutModalSolution from "../modal/LayoutModalSolution";
import ComponentTitle from "../molecules/ComponentTitle";

interface Template01Props extends PageProps {}

const Template01 = ({ page, setPageCompleted }: Template01Props) => {
  const thisPage = page.data as Template01Data;

  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  const contents = useMemo(() => {
    return getContentComponent(thisPage.contents);
  }, [getContentComponent, thisPage]);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="회화 속 주인공이 되어 말하기 연습을 해보세요." />
        {/* <ComponentChoiceRole /> */}
        {contents}
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
    </div>
  );
};

export default Template01;
