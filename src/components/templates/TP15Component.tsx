import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP15 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP15Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 20px;
  justify-content: center;
`;

const LongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface TP15ComponentProps extends TemplateProps {}

const TP15Component = ({ setPageCompleted, page, showHeader = true }: TP15ComponentProps) => {
  const thisPage = page as TP15;
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
      <TP15Layout>
        {thisPage.template.contents.map((content, index) => {
          if (content) {
            if (index === 0) {
              return <LongContainer key={index}>{getContentComponent(content)}</LongContainer>;
            }
            return <ContentContainer key={index}>{getContentComponent(content)}</ContentContainer>;
          } else {
            return <></>;
          }
        })}
      </TP15Layout>
    </TemplateCommonLayout>
  );
};

export default TP15Component;
