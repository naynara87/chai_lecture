import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { TP03A, TP03AContent } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ListenWordContent from "../molecules/ListenWordContent";
import TitleContent from "../molecules/TitleContent";
import ContentLayout from "../Layouts/ContentLayout";

interface TP03AComponentProps extends TemplateProps {}

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

const TP03AComponent = ({ setPageCompleted, page }: TP03AComponentProps) => {
  const thisPage = page as TP03A;
  const renderContents = useCallback((content: TP03AContent, index: number) => {
    if (content.type === "html") {
      const html = content.data.text;
      return (
        <HtmlWrapper key={index}>
          <HtmlContentComponent html={html} />
        </HtmlWrapper>
      );
    } else if (content.type === "listenWords") {
      return <ListenWordContent key={index} datas={content.data} />;
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

export default TP03AComponent;
