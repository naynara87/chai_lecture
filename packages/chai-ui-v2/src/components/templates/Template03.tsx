import React, { useEffect, useMemo } from "react";
import {
  TemplateProps,
  Template_H_3_7Data,
  useContentMapper,
} from "../../core";

interface Template03Props extends TemplateProps {}

const Template03 = ({ template, setPageCompleted }: Template03Props) => {
  const thisPage = template as Template_H_3_7Data;

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
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">{leftContents}</div>
      <div className="layout-panel wide-panel">{rightContents}</div>
    </div>
  );
};

export default Template03;
