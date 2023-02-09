import React, { useEffect, useMemo, useRef } from "react";
import styled from "@emotion/styled";
import { TP02N } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import AudioButton from "../atoms/AudioButton";
import TextBox from "../atoms/TextBox";
import { css } from "@emotion/react";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import useAudio from "../../hooks/useAudio";
import { colorPalette } from "../../styles/colorPalette";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

const customLayoutCss = css`
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  max-width: 30%;
  padding: ${changePXtoVH(15)} ${changePXtoVW(15)};
  text-align: center;
`;

const customPronunciationCss = css`
  margin-top: ${changePXtoVW(32)};
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.pronunciationText};
`;

const customMeaningCss = css`
  margin-top: ${changePXtoVW(24)};
  margin-bottom: ${changePXtoVW(64)};
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
`;

interface TP02NComponentProps extends TemplateProps {}

const TP02NComponent = ({
  setPageCompleted,
  page,
  showHeader = true,
}: TP02NComponentProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { handleClickAudioButton, audioIndex, audioSrc, audioState } =
    useAudio(audioRef);

  const thisPage = page as TP02N;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const StudyWordsContentData = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "studyWords",
    );
  }, [thisPage.template.contents]);

  const mainContents = useMemo(() => {
    if (!StudyWordsContentData?.data) {
      return <></>;
    }
    return StudyWordsContentData?.data.map((content, index) => {
      return (
        <ContentContainer key={index}>
          <TextBox text={content.text} />
          <HtmlContentComponent
            html={content.pronunciation ?? ""}
            customCss={customPronunciationCss}
          />
          <HtmlContentComponent
            html={content.meaning ?? ""}
            customCss={customMeaningCss}
          />
          <AudioButton
            audioUrl={content.audio.src}
            isAudio={false}
            audioHandler={handleClickAudioButton}
            currentAudioIndex={audioIndex}
            audioIndex={index}
            audioState={audioState}
          />
        </ContentContainer>
      );
    });
  }, [
    StudyWordsContentData?.data,
    audioIndex,
    handleClickAudioButton,
    audioState,
  ]);

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
      <TP02Layout customCss={customLayoutCss}>
        <>
          {mainContents}
          <audio ref={audioRef}>
            <source src={audioSrc} />
          </audio>
        </>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02NComponent;
