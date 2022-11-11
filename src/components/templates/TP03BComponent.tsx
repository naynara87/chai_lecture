import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { TP03B, TP03BContent } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TitleContent from "../molecules/TitleContent";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ContentLayout from "../Layouts/ContentLayout";
import TextBoxes from "../molecules/TextBoxes";

interface TP0BAComponentProps extends TemplateProps {}

const HtmlWrapper = styled("div")`
  line-height: 1.5;
  font-weight: 400;
  font-size: 26px;
  color: #666666;
  white-space: pre-line;
  text-align: center;

  @media all and (max-width: 1024px) {
    font-size: 2.5vw;
  }
`;

const TP03BComponent = ({ setPageCompleted, page }: TP0BAComponentProps) => {
  const thisPage = page as TP03B;
  const renderContents = useCallback((content: TP03BContent, index: number) => {
    if (content.type === "html") {
      const html = content.data.text;
      return (
        <HtmlWrapper key={index}>
          <HtmlContentComponent html={html} />
        </HtmlWrapper>
      );
    } else if (content.type === "textBoxes") {
      return <TextBoxes key={index} textBoxes={content.data} />;
    }
  }, []);
  return (
    <>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <ContentLayout>
        {thisPage.template.contents.map((item, index) => {
          return renderContents(item, index) ?? <div>not loaded</div>;
        })}
      </ContentLayout>
    </>
  );
};

export default TP03BComponent;
