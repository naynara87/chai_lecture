import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { TP03E } from "../../types/pageTemplate";
import { AudioContent, HtmlContent, TextBoxesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import AudioButton from "../atoms/AudioButton";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP03Layout from "../Layouts/TP03Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TextBoxes from "../molecules/TextBoxes";
import TitleContent from "../molecules/TitleContent";

const htmlCss = css`
  font-size: ${changePXtoVW(48)};
  line-height: ${changePXtoVH(72)};
  font-weight: 500;
  text-align: center;
  color: ${colorPalette.black};
  margin-bottom: ${changePXtoVH(64)};
`;

const BoxContainerCss = css`
  margin-bottom: ${changePXtoVH(64)};
`;

const bottomHtmlCss = css`
  font-weight: 700;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.boldText};
  margin-top: ${changePXtoVH(64)};
`;

interface TP03EComponentProps extends TemplateProps {}

const TP03EComponent = ({ setPageCompleted, page }: TP03EComponentProps) => {
  const thisPage = page as TP03E;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const audioContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audio") as
      | AudioContent
      | undefined;
  }, [thisPage.template.contents]);

  const TextBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP03Layout>
        <HtmlContentComponent html={htmlContentData?.data?.[0].text ?? ""} customCss={htmlCss} />
        <TextBoxes
          datas={TextBoxesContentData?.data ?? []}
          customBoxContainerCss={BoxContainerCss}
        />
        <AudioButton isAudio={true} audioUrl={audioContentData?.data?.[0].src ?? ""} />
        <HtmlContentComponent
          html={htmlContentData?.data?.[1].text ?? ""}
          customCss={bottomHtmlCss}
        />
      </TP03Layout>
    </TemplateCommonLayout>
  );
};

export default TP03EComponent;
