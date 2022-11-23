import React, { useEffect, useMemo } from "react";
import { TP11G } from "../../types/pageTemplate";
import { WordQuizCardContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuizCard from "../contents/WordQuizCard";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

interface TP11GComponentProps extends TemplateProps {}

const TP11GComponent = ({ setPageCompleted, page }: TP11GComponentProps) => {
  const thisPage = page as TP11G;

  const wordQuizCardContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "wordQuizCard") as
      | WordQuizCardContent
      | undefined;
  }, [thisPage.template.contents]);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <WordQuizCard datas={wordQuizCardContentData?.data ?? []} pageType={thisPage.template.type} />
    </TemplateCommonLayout>
  );
};

export default TP11GComponent;
