import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP02 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP02Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;
interface TP02ComponentProps extends TemplateProps {}

const TP02Component = ({ setPageCompleted, page, showHeader = true }: TP02ComponentProps) => {
  const thisPage = page as TP02;

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
      <TP02Layout>
        <ContentContainer>{getContentComponent(thisPage.template.contents[0])}</ContentContainer>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02Component;
