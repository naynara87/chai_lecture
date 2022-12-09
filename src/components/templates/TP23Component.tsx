import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import useContentMapper from "../../hooks/useContentMapper";
import { TP23 } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

const TP23Layout = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 20px;
  justify-content: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row-start: 1;
  grid-row-end: 3;
`;

interface ContentContainerProps {
  isSecondContent: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => (props.isSecondContent ? "flex-end" : "flex-start")};
  width: 100%;
  height: 100%;
`;

interface TP23ComponentProps extends TemplateProps {}

const TP23Component = ({ setPageCompleted, page, showHeader = true }: TP23ComponentProps) => {
  const thisPage = page as TP23;

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
      <TP23Layout>
        {thisPage.template.contents.map((content, index) => {
          if (content) {
            if (index === 0) {
              return (
                <ColumnContainer key={index}>
                  {getContentComponent(content, thisPage.id)}
                </ColumnContainer>
              );
            }
            return (
              <ContentContainer key={index} isSecondContent={index === 1}>
                {getContentComponent(content, thisPage.id)}
              </ContentContainer>
            );
          } else {
            return <></>;
          }
        })}
      </TP23Layout>
    </TemplateCommonLayout>
  );
};

export default TP23Component;
