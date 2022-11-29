import React, { useEffect, useMemo } from "react";
import { TP11G } from "../../types/pageTemplate";
import { WordQuizContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuiz from "../contents/WordQuiz";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
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
    console.log(thisPage.template.type);
    setPageCompleted();
  }, [setPageCompleted, thisPage.template.type]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <WordQuiz datas={wordQuizContentData?.data ?? []} reverse={true} />
    </TemplateCommonLayout>
  );
};

export default TP11GComponent;
