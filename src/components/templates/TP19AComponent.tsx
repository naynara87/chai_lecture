import React, { useEffect, useMemo } from "react";
import { TP19A } from "../../types/pageTemplate";
import { StudySentencesWithVocabularyContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import StudySentencesWithVocabulary from "../contents/StudySentencesWithVocabulary";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP19Layout from "../Layouts/TP19Layout";
import TitleContent from "../molecules/TitleContent";

interface TP19AComponentProps extends TemplateProps {}

const TP19AComponent = ({ setPageCompleted, page, showHeader = true }: TP19AComponentProps) => {
  const thisPage = page as TP19A;

  useEffect(() => {
    console.log(thisPage.template.type);
    setPageCompleted();
  }, [setPageCompleted, thisPage.template.type]);

  const studySentencesWithVocabularyContent = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "studySentencesWithVocabulary",
    ) as StudySentencesWithVocabularyContent | undefined;
  }, [thisPage]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP19Layout>
        <StudySentencesWithVocabulary
          studySentencesWithVocabularyDatas={studySentencesWithVocabularyContent?.data ?? []}
        />
      </TP19Layout>
    </TemplateCommonLayout>
  );
};

export default TP19AComponent;
