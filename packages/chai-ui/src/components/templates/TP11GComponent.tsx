import React, { useEffect, useMemo } from "react";
import { TP11G } from "../../types/pageTemplate";
import { WordQuizContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuiz from "../contents/WordQuiz";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP11Layout from "../Layouts/TP11Layout";
import TitleContent from "../molecules/TitleContent";

interface TP11GComponentProps extends TemplateProps {}

const TP11GComponent = ({ setPageCompleted, page, showHeader = true }: TP11GComponentProps) => {
  const thisPage = page as TP11G;

  const wordQuizContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "wordQuiz") as
      | WordQuizContent
      | undefined;
  }, [thisPage.template.contents]);
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);
  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP11Layout>
        <WordQuiz datas={wordQuizContentData?.data ?? []} reverse={true} />
      </TP11Layout>
    </TemplateCommonLayout>
  );
};

export default TP11GComponent;
