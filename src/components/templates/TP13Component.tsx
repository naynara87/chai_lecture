import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP13 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP13Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-columns: 48% 48%;
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

interface TP13ComponentProps extends TemplateProps {}

const TP13Component = ({ setPageCompleted, page, showHeader = true }: TP13ComponentProps) => {
  const thisPage = page as TP13;
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
      <TP13Layout>
        {thisPage.template.contents.map((content, index) => {
          if (content) {
            return <ContentContainer key={index}>{getContentComponent(content)}</ContentContainer>;
          } else {
            return <></>;
          }
        })}
      </TP13Layout>
    </TemplateCommonLayout>
  );
};

export default TP13Component;
