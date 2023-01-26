import React, { useEffect, useMemo } from "react";
import { TP10C } from "../../types/pageTemplate";
import { WordQuizContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuizTP10C from "../contents/WordQuizTP10C";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP10Layout from "../Layouts/TP10Layout";
import TitleContent from "../molecules/TitleContent";

interface TP10CComponentProps extends TemplateProps {}

const TP10CComponent = ({ setPageCompleted, page }: TP10CComponentProps) => {
  const thisPage = page as TP10C;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const wordQuizContentData = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "wordQuiz"
    ) as WordQuizContent | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP10Layout>
        <WordQuizTP10C datas={wordQuizContentData?.data ?? []} />
      </TP10Layout>
    </TemplateCommonLayout>
  );
};

export default TP10CComponent;
