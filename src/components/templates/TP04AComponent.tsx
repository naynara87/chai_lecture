import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { TP04A } from "../../types/pageTemplate";
import { AudioContent, HtmlContent, ImagesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import AudioButton from "../atoms/AudioButton";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP04Layout from "../Layouts/TP04Layout";
import TitleContent from "../molecules/TitleContent";
import ImageContentComponent from "../contents/ImageContentComponent";
import { css } from "@emotion/react";
import HtmlContentComponent from "../contents/HtmlContentComponent";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";

const imageCustomCss = css`
  width: ${changePXtoVW(600)};
  height: ${changePXtoVW(200)};
  object-fit: contain;
`;

const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33%;
  width: 100%;
  /* line-height: 1.15vw; */
  gap: 4%;
  align-items: center;
  margin: 0 auto;
  font-size: ${changePXtoVW(36)};
  justify-content: center;
  /* color: ${colorPalette.descriptionText}; */
`;

const AudioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const htmlCustomCss = css`
  text-align: left;
`;

interface TP0BAComponentProps extends TemplateProps {}

const TP04AComponent = ({ setPageCompleted, page }: TP0BAComponentProps) => {
  const thisPage = page as TP04A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const imagesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "images") as
      | ImagesContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const AudioContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audio") as
      | AudioContent
      | undefined;
  }, [thisPage.template.contents]);

  const renderContents = useMemo(() => {
    if (!htmlContentData?.data || !imagesContentData?.data) {
      return;
    }
    const { data: htmlContents } = htmlContentData;
    const { data: imageContents } = imagesContentData;

    const minLengthContent =
      htmlContents.length <= imageContents.length ? htmlContents : imageContents;
    return minLengthContent.map((content, index) => {
      return (
        <ContainerWrapper key={index}>
          {imageContents[index] && (
            <ImageContentComponent
              imageSrc={imageContents[index].src}
              imageAlt=""
              filter="none"
              customCss={imageCustomCss}
            />
          )}
          {htmlContents[index] && (
            <HtmlContentComponent html={htmlContents[index].text} customCss={htmlCustomCss} />
          )}
        </ContainerWrapper>
      );
    });
  }, [htmlContentData, imagesContentData]);
  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP04Layout>
        {renderContents}
        <AudioWrapper>
          <AudioButton isAudio={true} audioUrl={AudioContentData?.data[0].src} />
        </AudioWrapper>
      </TP04Layout>
    </TemplateCommonLayout>
  );
};

export default TP04AComponent;
