import React, { useCallback } from "react";
import { TP03A, TP03AContent } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ListenWordContent from "../molecules/ListenWordContent";

interface TP03AComponentProps extends TemplateProps {}
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
      {thisPage.template.contents.map((item, index) => {
        return renderContents(item, index);
      })}
    </>
  );
};

export default TP03AComponent;
