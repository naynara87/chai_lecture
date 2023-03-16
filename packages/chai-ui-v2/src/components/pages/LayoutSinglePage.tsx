import React from "react";
import { PageProps, SinglePage, useTemplateMapper } from "../../core";

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
    <div key={singlePageData.id}>
      {getTemplateComponent(singlePageData.data.type, singlePageData.data)}
    </div>
  );
};

export default LayoutSinglePage;
