import React, { useEffect, useMemo } from "react";
import { TP10A } from "../../types/pageTemplate";
import { WordQuizCardContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuizCard from "../contents/WordQuizCard";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";

interface TP10AComponentProps extends TemplateProps {}

const TP10AComponent = ({ setPageCompleted, page }: TP10AComponentProps) => {
  const thisPage = page as TP10A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const wordQuizCardContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "wordQuizCard") as
      | WordQuizCardContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <WordQuizCard datas={wordQuizCardContentData?.data ?? []} />
    </TemplateCommonLayout>
  );
};

export default TP10AComponent;
