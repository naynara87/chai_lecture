import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo, useRef } from "react";
import useAudio from "../../hooks/useAudio";
import { TP05G } from "../../types/pageTemplate";
import { HtmlContent, NumberTableContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import NumberTable from "../contents/NumberTable";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP08Layout from "../Layouts/TP08Layout";
import TipComponent from "../molecules/TipComponent";
import TitleContent from "../molecules/TitleContent";

const NumberTableContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${changePXtoVW(300)};
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 4%;
  margin: 0 auto;
  width: ${changePXtoVW(1093)};
  height: ${changePXtoVW(584)};
`;

const tipCustomCss = css`
  width: ${changePXtoVW(679)};
  margin: 0 auto;
`;

interface TP05GComponentProps extends TemplateProps {}

const TP05GComponent = ({ setPageCompleted, page, showHeader = true }: TP05GComponentProps) => {
  const thisPage = page as TP05G;
  const audioRef = useRef<HTMLAudioElement>(null);
  const { audioSrc, audioIndex, handleClickAudioButton, audioState } = useAudio(audioRef);
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const numberTableContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "numberTable") as
      | NumberTableContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlTipString = useMemo(() => {
    const htmlTipData = htmlContentData?.data.find((content) => content.kind === "tip");
    return htmlTipData?.text;
  }, [htmlContentData?.data]);

  const mainContents = useMemo(() => {
    return numberTableContentData?.data.map((content, index) => {
      const { text, pronunciation, meaning, audio } = content;
      return (
        <NumberTableContainer key={index}>
          <NumberTable
            text={text}
            pronunciation={pronunciation}
            meaning={meaning}
            audioHandler={handleClickAudioButton}
            audioIndex={index + 1}
            audioUrl={audio.src}
            currentAudioIndex={audioIndex ?? 0}
            audioState={audioState}
          />
        </NumberTableContainer>
      );
    });
  }, [numberTableContentData?.data, audioIndex, handleClickAudioButton, audioState]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP08Layout>
        <MainContainer>{mainContents ?? <></>}</MainContainer>
        {htmlTipString ? (
          <TipComponent html={htmlTipString ?? ""} customCss={tipCustomCss}></TipComponent>
        ) : (
          <></>
        )}
        <audio ref={audioRef}>
          <source src={audioSrc} />
        </audio>
      </TP08Layout>
    </TemplateCommonLayout>
  );
};

export default TP05GComponent;
