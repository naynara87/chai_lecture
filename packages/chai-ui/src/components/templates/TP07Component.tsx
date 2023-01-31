import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP07 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

export const TP07LayoutWrapper = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: 28% 40% 28%;
  grid-template-columns: 49% 49%;
  gap: 2%;
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

interface TP07ComponentProps extends TemplateProps {}

const TP07Component = ({
  setPageCompleted,
  page,
  showHeader = true,
}: TP07ComponentProps) => {
  const thisPage = page as TP07;

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
      <TP07LayoutWrapper>
        {thisPage.template.contents.map((content, index) => {
          if (content) {
            if (index === 0 || index === 3) {
              return (
                <LongContainer key={index}>
                  {getContentComponent(content, thisPage.id)}
                </LongContainer>
              );
            }
            return (
              <ContentContainer key={index}>
                {getContentComponent(content, thisPage.id)}
              </ContentContainer>
            );
          } else {
            return <></>;
          }
        })}
      </TP07LayoutWrapper>
    </TemplateCommonLayout>
  );
};

export default TP07Component;
