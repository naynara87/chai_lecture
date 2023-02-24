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
    page,
  });

  return <>{getTemplateComponent(singlePageData.data.type)}</>;
};

export default LayoutSinglePage;
