import React, { useEffect, useMemo } from "react";
import {
  TemplateProps,
  Template_H_5_5Data,
  useContentMapper,
} from "../../core";

interface Template02Props extends TemplateProps {}

const Template02 = ({ template, setPageCompleted }: Template02Props) => {
  const thisPage = template as Template_H_5_5Data;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  const leftContents = useMemo(() => {
    if (!thisPage.leftContents) return;
    return thisPage.leftContents.map((leftContent, leftContentIndex) => {
      return getContentComponent(leftContent, leftContentIndex);
    });
  }, [thisPage, getContentComponent]);

  const rightContents = useMemo(() => {
    if (!thisPage.rightContents) return;
    return thisPage.rightContents.map((rightContent, rightContentIndex) => {
      return getContentComponent(rightContent, rightContentIndex);
    });
  }, [thisPage, getContentComponent]);

  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel">{leftContents}</div>
      <div className="layout-panel wide-panel">{rightContents}</div>
    </div>
  );
};

export default Template02;
