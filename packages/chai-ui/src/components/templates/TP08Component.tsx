import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP08 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

export const TP08LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 30% 40% 30%;
  gap: 2%;
  height: ${templateContentsAreaHeight};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface TP08ComponentProps extends TemplateProps {}

const TP08Component = ({
  setPageCompleted,
  page,
  showHeader = false,
}: TP08ComponentProps) => {
  const thisPage = page as TP08;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent
          title={thisPage.title}
          description={thisPage.description}
        />
      ) : (
        <></>
      )}
      <TP08LayoutWrapper>
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
      </TP08LayoutWrapper>
    </TemplateCommonLayout>
  );
};

export default TP08Component;
