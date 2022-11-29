import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP04 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP04Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: 48% 48%;
  gap: 20px;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface TP04ComponentProps extends TemplateProps {}

const TP04Component = ({ setPageCompleted, page, showHeader = true }: TP04ComponentProps) => {
  const thisPage = page as TP04;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP04Layout>
        <ContentContainer>{getContentComponent(thisPage.template.contents[0])}</ContentContainer>
        <ContentContainer>{getContentComponent(thisPage.template.contents[1])}</ContentContainer>
      </TP04Layout>
    </TemplateCommonLayout>
  );
};

export default TP04Component;
