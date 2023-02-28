import { PageProps, SinglePage, useTemplateMapper } from "chai-ui-v2";
import React from "react";

interface LayoutSinglePageProps extends PageProps {}
const LayoutSinglePage = ({
  page,
  setPageCompleted,
}: LayoutSinglePageProps) => {
  const singlePageData = page as SinglePage;

  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
  });

  return (
    <>{getTemplateComponent(singlePageData.data.type, singlePageData.data)}</>
  );
};

export default LayoutSinglePage;
