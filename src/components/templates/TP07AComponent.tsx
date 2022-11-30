import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { TP07A } from "../../types/pageTemplate";
import {
  AudioRecordContent,
  HtmlContent,
  IconTextContent,
  ImagesContent,
} from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import ImageContentComponent from "../contents/ImageContentComponent";
import AudioRecorder from "../contents/AudioRecorder";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP07Layout from "../Layouts/TP07Layout";
import TitleContent from "../molecules/TitleContent";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import IconText from "../molecules/IconText";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${changePXtoVW(40)};
  width: 100%;
`;

const imageCustomCss = css`
  width: ${changePXtoVW(723)};
  height: ${changePXtoVW(350)};
  object-fit: contain;
`;

const layoutCustomCss = css`
  height: 100%;
`;

interface TP07AComponentProps extends TemplateProps {}

const TP07AComponent = ({ setPageCompleted, page, showHeader = true }: TP07AComponentProps) => {
  const thisPage = page as TP07A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const iconTextContent = useMemo(
    () =>
      thisPage.template.contents.find((content) => content.type === "iconText") as
        | IconTextContent
        | undefined,
    [thisPage],
  );

  const imageContent = useMemo(
    () =>
      thisPage.template.contents.find((content) => content.type === "images") as
        | ImagesContent
        | undefined,
    [thisPage],
  );

  const htmlContent = useMemo(
    () =>
      thisPage.template.contents.find((content) => content.type === "html") as
        | HtmlContent
        | undefined,
    [thisPage],
  );

  const audioRecorderContent = useMemo(
    () =>
      thisPage.template.contents.find((content) => content.type === "audioRecord") as
        | AudioRecordContent
        | undefined,
    [thisPage],
  );

  const mainContents = useMemo(() => {
    return (
      <MainContainer>
        <ImageContentComponent
          imageSrc={imageContent?.data?.[0]?.src ?? ""}
          imageAlt={htmlContent?.data?.[0].text ?? ""}
          filter="none"
          customCss={imageCustomCss}
        />
        <HtmlContentComponent html={htmlContent?.data?.[0].text ?? ""} />
      </MainContainer>
    );
  }, [htmlContent?.data, imageContent?.data]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP07Layout customCss={layoutCustomCss}>
        <IconText text={iconTextContent?.data?.[0]?.text ?? ""} />
        {mainContents}
        {audioRecorderContent ? (
          <AudioRecorder audioUrl={audioRecorderContent?.data?.[0].audio.src} />
        ) : (
          <></>
        )}
      </TP07Layout>
    </TemplateCommonLayout>
  );
};

export default TP07AComponent;
