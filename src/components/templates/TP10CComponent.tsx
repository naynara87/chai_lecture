import React, { useEffect, useMemo } from "react";
import { TP10C } from "../../types/pageTemplate";
import { ChooseTextContent, HtmlContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import QuestionBlank from "../atoms/QuestionBlank";
import ChooseText from "../contents/ChooseText";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP10Layout from "../Layouts/TP10Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TitleContent from "../molecules/TitleContent";

interface TP10CComponentProps extends TemplateProps {}

const TP10CComponent = ({ setPageCompleted, page, showHeader = true }: TP10CComponentProps) => {
  const thisPage = page as TP10C;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const chooseTextContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "chooseText") as
      | ChooseTextContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP10Layout>
        {chooseTextContentData ? <ChooseText contentData={chooseTextContentData} /> : <></>}
        <HtmlContentComponent html={htmlContentData?.data?.[0].text ?? ""} />
        <QuestionBlank />
      </TP10Layout>
    </TemplateCommonLayout>
  );
};

export default TP10CComponent;
