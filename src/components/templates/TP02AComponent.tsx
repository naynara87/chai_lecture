import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { TP02A } from "../../types/pageTemplate";
import { AudioContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import AudioButton from "../atoms/AudioButton";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";

const AudioWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface TP02AComponentProps extends TemplateProps {}

const TP02AComponent = ({ setPageCompleted, page, showHeader = true }: TP02AComponentProps) => {
  const thisPage = page as TP02A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const AudioContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audio") as
      | AudioContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout>
        <AudioWrapper>
          <AudioButton isAudio={true} audioUrl={AudioContentData?.data?.[0].src} />
        </AudioWrapper>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02AComponent;
