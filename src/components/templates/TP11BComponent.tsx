import React, { useEffect, useMemo } from "react";
import { TP11B } from "../../types/pageTemplate";
import { WordQuizContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import WordQuizTP11B from "../contents/WordQuizTP11B";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP11Layout from "../Layouts/TP11Layout";
import TitleContent from "../molecules/TitleContent";

interface TP11BComponentProps extends TemplateProps {}

const TP11BComponent = ({ setPageCompleted, page, showHeader = true }: TP11BComponentProps) => {
  const thisPage = page as TP11B;

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
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP11Layout>
        <WordQuizTP11B datas={wordQuizContentData?.data ?? []} />
      </TP11Layout>
    </TemplateCommonLayout>
  );
};

export default TP11BComponent;
