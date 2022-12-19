import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { TP05D } from "../../types/pageTemplate";
import {
  AudioRecordContent,
  HtmlContent,
  SentenceWordContent,
  TextBoxesContent,
} from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import AudioRecorder from "../contents/AudioRecorder";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP05Layout from "../Layouts/TP05Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import SentenceBubbleComponent from "../molecules/SentenceBubble";
import TextBoxes from "../molecules/TextBoxes";
import TitleContent from "../molecules/TitleContent";

const MeaningContainer = styled.div`
  margin: ${changePXtoVH(64)} auto;
`;

const MeaningShowButton = styled.button`
  width: ${changePXtoVW(278)};
  height: ${changePXtoVW(80)};
  background-color: ${colorPalette.sentenceBubble};
  color: ${colorPalette.backgroundWhite};
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
`;

interface TP05DComponentProps extends TemplateProps {}

const TP05DComponent = ({ setPageCompleted, page }: TP05DComponentProps) => {
  const thisPage = page as TP05D;

  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const audioRecordContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audioRecord") as
      | AudioRecordContent
      | undefined;
  }, [thisPage.template.contents]);

  const textBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  const sentenceWordContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "sentenceWord") as
      | SentenceWordContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlContents = useMemo(() => {
    return htmlContentData?.data.map((html, index) => {
      return <HtmlContentComponent html={html.text} key={index} />;
    });
  }, [htmlContentData?.data]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP05Layout>
        <TextBoxes datas={textBoxesContentData?.data ?? []} />
        <MeaningContainer>
          {showMeaning ? (
            htmlContents
          ) : (
            <MeaningShowButton
              onClick={() => {
                setShowMeaning(true);
              }}
            >
              뜻 보기
            </MeaningShowButton>
          )}
        </MeaningContainer>
        <AudioRecorder audioUrl={audioRecordContentData?.data?.[0].audio.src ?? ""} />
        <SentenceBubbleComponent sentences={sentenceWordContentData?.data ?? []} />
      </TP05Layout>
    </TemplateCommonLayout>
  );
};

export default TP05DComponent;
