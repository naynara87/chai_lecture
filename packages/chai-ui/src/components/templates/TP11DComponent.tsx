import React, { useEffect, useMemo } from "react";
import { TP11D } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import WordQuizTP11B from "../contents/WordQuizTP11B";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP11Layout from "../Layouts/TP11Layout";
import TitleContent from "../molecules/TitleContent";

interface TP11DComponentProps extends TemplateProps {}

const TP11DComponent = ({
  setPageCompleted,
  page,
  showHeader = true,
}: TP11DComponentProps) => {
  const thisPage = page as TP11D;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const wordQuizContentData = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "wordQuiz",
    );
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent
          title={thisPage.title}
          description={thisPage.description}
        />
      ) : (
        <></>
      )}
      <TP11Layout>
        <WordQuizTP11B datas={wordQuizContentData?.data ?? []} />
      </TP11Layout>
    </TemplateCommonLayout>
  );
};

export default TP11DComponent;
