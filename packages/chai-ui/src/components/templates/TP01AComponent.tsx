import React, { useEffect, useMemo } from "react";
import { TP01A } from "../../types/pageTemplate";
import { ChooseTextByAudioContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { ChooseTextByAudio } from "../contents";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP01Layout from "../Layouts/TP01Layout";
import TitleContent from "../molecules/TitleContent";

interface TP01AComponentProps extends TemplateProps {}

const TP01AComponent = ({
  setPageCompleted,
  page,
  showHeader = true,
}: TP01AComponentProps) => {
  const thisPage = page as TP01A;
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const chooseTextByAudioContentData = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "chooseTextByAudio"
    ) as ChooseTextByAudioContent | undefined;
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
      <TP01Layout>
        <ChooseTextByAudio
          chooseTextByAudioContentData={chooseTextByAudioContentData}
        />
      </TP01Layout>
    </TemplateCommonLayout>
  );
};

export default TP01AComponent;
