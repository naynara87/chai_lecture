import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP03 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP03Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: 20% 76%;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
interface TP03ComponentProps extends TemplateProps {}

const TP03Component = ({ setPageCompleted, page, showHeader = true }: TP03ComponentProps) => {
  const thisPage = page as TP03;

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
      <TP03Layout>
        {thisPage.template.contents.map((content, index) => {
          if (content) {
            return (
              <ContentContainer key={index}>
                {getContentComponent(content, thisPage.id)}
              </ContentContainer>
            );
          } else {
            return <></>;
          }
        })}
      </TP03Layout>
    </TemplateCommonLayout>
  );
};

export default TP03Component;
