import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { PageProps, SinglePage, useTemplateMapper } from "../../core";
import { LayoutModalIntroduction } from "../modal";

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

  const [isIntroductionModalOpen, setIsIntroductionModalOpen] = useState(false);

  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
  });

  useEffect(() => {
    if (page?.introduction) {
      setIsIntroductionModalOpen(true);
    }
  }, [page, setIsIntroductionModalOpen]);

  const introduction = useMemo(() => {
    if (page?.introduction) {
      return (
        <LayoutModalIntroduction
          isModalOpen={isIntroductionModalOpen}
          setIsModalOpen={setIsIntroductionModalOpen}
          introduction={page.introduction}
        />
      );
    }
  }, [page, isIntroductionModalOpen]);

  return (
    <SinglePageWrap key={singlePageData.id}>
      {getTemplateComponent(singlePageData.data.type, singlePageData.data)}
      {introduction}
    </SinglePageWrap>
  );
};

export default LayoutSinglePage;
