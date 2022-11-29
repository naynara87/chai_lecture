import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP05 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP04Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: 76% 20%;
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

interface TP05ComponentProps extends TemplateProps {}

const TP05Component = ({ setPageCompleted, page, showHeader = true }: TP05ComponentProps) => {
  const thisPage = page as TP05;

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

export default TP05Component;
