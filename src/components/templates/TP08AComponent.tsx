import React, { useEffect, useMemo } from "react";
import { TP08A } from "../../types/pageTemplate";
import { HtmlContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";

interface TP08AComponentProps extends TemplateProps {}

const TP08AComponent = ({ setPageCompleted, page }: TP08AComponentProps) => {
  const thisPage = page as TP08A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  return <>TP08AComponent</>;
};

export default TP08AComponent;
