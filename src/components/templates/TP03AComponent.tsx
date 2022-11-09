import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { TP03A, TP03AContent } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ListenWordContent from "../molecules/ListenWordContent";
import TitleContent from "../molecules/TitleContent";

interface TP03AComponentProps extends TemplateProps {}

const ContentsContainer = styled.div`
  overflow: auto;
  height: 484px;
  padding-top: 42px;
  text-align: center;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media all and (max-width: 1024px) {
    padding-top: 4.1666666667vw;
    height: calc(100vh - 5.4166666667vw - 7.2916666667vw - 14.0625vw);
    max-height: 584px;
  }
`;

const TP03AComponent = ({ setPageCompleted, page }: TP03AComponentProps) => {
  const thisPage = page as TP03A;
  const renderContents = useCallback((content: TP03AContent, index: number) => {
    if (content.type === "html") {
      const html = content.data.text;
      return <HtmlContentComponent key={index} text={html} />;
    } else if (content.type === "listenWords") {
      return <ListenWordContent key={index} datas={content.data} />;
    }
  }, []);
  return (
    <>
      <TitleContent title={page.title} description={page.description} />
      <ContentsContainer>
        {thisPage.template.contents.map((item, index) => {
          return renderContents(item, index);
        })}
      </ContentsContainer>
    </>
  );
};

export default TP03AComponent;
