import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP17 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

export const TP17LayoutWrapper = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: 2 8% 40% 28%;
  grid-template-columns: 49% 49%;
  gap: 2%;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface TP17ComponentProps extends TemplateProps {}

const TP17Component = ({
  setPageCompleted,
  page,
  showHeader = false,
}: TP17ComponentProps) => {
  const thisPage = page as TP17;

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
      <TP17LayoutWrapper>
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
      </TP17LayoutWrapper>
    </TemplateCommonLayout>
  );
};

export default TP17Component;
