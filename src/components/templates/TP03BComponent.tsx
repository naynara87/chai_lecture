import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { TP03B, TP03C, TP03D } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TitleContent from "../molecules/TitleContent";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import TextBoxes from "../molecules/TextBoxes";
import { AudioContent, HtmlContent, TextBoxesContent } from "../../types/templateContents";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP03Layout from "../Layouts/TP03Layout";
import { colorPalette } from "../../styles/colorPalette";
import AudioButton from "../atoms/AudioButton";
import { breakPoints } from "../../constants/layout";

interface TP0BAComponentProps extends TemplateProps {}

const HtmlWrapper = styled("div")`
  line-height: 1.5;
  font-weight: 400;
  font-size: 26px;
  color: ${colorPalette.descriptionText};
  white-space: pre-line;
  text-align: center;

  @media all and (max-width: ${breakPoints.tablet}) {
    font-size: 2.5vw;
  }
`;

const AudioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * template type에 따라 TP03B, TP03C를 렌더함.
 */
const TP03BComponent = ({ setPageCompleted, page }: TP0BAComponentProps) => {
  const thisPage = page as TP03B | TP03C | TP03D;
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlString = useMemo(() => {
    if (!htmlContentData) {
      return;
    }
    const [htmlData] = htmlContentData.data;
    return htmlData?.text;
  }, [htmlContentData]);

  const TextBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  const AudioContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audio") as
      | AudioContent
      | undefined;
  }, [thisPage.template.contents]);

  const renderTP03BAndCComponents = useMemo(() => {
    if (!TextBoxesContentData?.data || !AudioContentData?.data) {
      return <></>;
    }
    const { type: templateType } = thisPage.template;
    const { src: audioUrl } = AudioContentData?.data[0];
    if (templateType === "TP03C") {
      return (
        <TP03Layout isReverse={true}>
          <TextBoxes datas={TextBoxesContentData.data} />
          <HtmlWrapper>
            <HtmlContentComponent html={htmlString ?? ""} />
          </HtmlWrapper>
          <AudioWrapper>
            <AudioButton isAudio={true} audioUrl={audioUrl} />
          </AudioWrapper>
        </TP03Layout>
      );
    } else {
      return (
        <TP03Layout>
          <HtmlWrapper>
            <HtmlContentComponent html={htmlString ?? ""} />
          </HtmlWrapper>
          <TextBoxes
            datas={TextBoxesContentData.data}
            isHorizontal={templateType === "TP03D" ? true : false}
          />
          <AudioWrapper>
            <AudioButton isAudio={true} audioUrl={audioUrl} />
          </AudioWrapper>
        </TP03Layout>
      );
    }
  }, [TextBoxesContentData?.data, htmlString, thisPage.template, AudioContentData?.data]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={page.title} description={page.description} />
      {renderTP03BAndCComponents}
    </TemplateCommonLayout>
  );
};

export default TP03BComponent;
