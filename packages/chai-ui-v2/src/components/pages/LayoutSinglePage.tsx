import styled from "@emotion/styled";
import React from "react";
import { PageProps, SinglePage, useTemplateMapper } from "../../core";
import useIntroductionModal from "../../core/hooks/useIntroductionModal";

const SinglePageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

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
    <SinglePageWrap key={singlePageData.id}>
      {getTemplateComponent(singlePageData.data.type, singlePageData.data)}
      {introduction}
    </SinglePageWrap>
  );
};

export default LayoutSinglePage;
