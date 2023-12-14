import React from "react";
import { PageProps, SinglePage, useTemplateMapper } from "../../core";
import useIntroductionModal from "../../core/hooks/useIntroductionModal";

interface LayoutSinglePageProps extends PageProps {}
const LayoutSinglePage = ({
  page,
  setPageCompleted,
}: LayoutSinglePageProps) => {
  const singlePageData = page as SinglePage;

  const { introduction } = useIntroductionModal({ page: singlePageData });

  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
  });

  return (
    <div className="single-page-wrap w-100 h-100" key={singlePageData.id}>
      {getTemplateComponent(singlePageData.data.type, singlePageData.data)}
      {introduction}
    </div>
  );
};

export default LayoutSinglePage;
