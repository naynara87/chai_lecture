import React, { useEffect, useMemo } from "react";
import { Template01Data, TemplateProps } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";

interface Template01Props extends TemplateProps {}

const Template01 = ({ template, setPageCompleted }: Template01Props) => {
  const thisPage = template as Template01Data;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  const contents = useMemo(() => {
    if (!thisPage.contents) return;
    return thisPage.contents.map((content, contentIndex) => {
      return getContentComponent(content, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        {/* <ComponentChoiceRole /> */}
        {contents}
      </div>
    </div>
  );
};

export default Template01;
