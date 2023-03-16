import React, { useEffect, useMemo } from "react";
import { Template01Data, TemplateProps } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";
import ComponentTitle from "../molecules/ComponentTitle";

interface Template01Props extends TemplateProps {}

const Template01 = ({ template, setPageCompleted }: Template01Props) => {
  const thisPage = template as Template01Data;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  const contents = useMemo(() => {
    return thisPage.contents.map((content, contentIndex) => {
      return getContentComponent(content, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="회화 속 주인공이 되어 말하기 연습을 해보세요." />
        {/* <ComponentChoiceRole /> */}
        {contents}
      </div>
    </div>
  );
};

export default Template01;
