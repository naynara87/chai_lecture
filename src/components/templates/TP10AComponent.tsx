import React, { useEffect, useMemo } from "react";
import { TP10A } from "../../types/pageTemplate";
import { WordQuizContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuiz from "../contents/WordQuiz";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

interface TP10AComponentProps extends TemplateProps {}

const TP10AComponent = ({ setPageCompleted, page }: TP10AComponentProps) => {
  const thisPage = page as TP10A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const wordQuizContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "wordQuiz") as
      | WordQuizContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <WordQuiz datas={wordQuizContentData?.data ?? []} />
    </TemplateCommonLayout>
  );
};

export default TP10AComponent;
