import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { TP03A } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TitleContent from "../molecules/TitleContent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP03Layout from "../Layouts/TP03Layout";
import { AudioContent, HtmlContent, TextBoxesContent } from "../../types/templateContents";
import { colorPalette } from "../../styles/colorPalette";
import { breakPoints } from "../../constants/layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { changePXtoVW } from "../../utils/styles";
import TextBoxes from "../molecules/TextBoxes";
import AudioButton from "../atoms/AudioButton";
import { css } from "@emotion/react";

interface TP03AComponentProps extends TemplateProps {}

const HtmlWrapper = styled("div")`
  line-height: 1.5;
  font-weight: 400;
  font-size: 26px;
  color: ${colorPalette.descriptionText};
  white-space: pre-line;
  text-align: center;
  margin-bottom: ${changePXtoVW(50)};

  @media all and (max-width: ${breakPoints.tablet}) {
    font-size: 2.5vw;
  }
`;

const AudioWrapper = styled.div`
  margin: ${changePXtoVW(50)} auto 0;
`;

const customBoxContainerCss = css`
  flex-wrap: nowrap;
`;

const customBoxCss = css`
  width: ${changePXtoVW(234)};
  height: ${changePXtoVW(136)};
`;

interface TP03AComponentProps extends TemplateProps {}

const TP03AComponent = ({ setPageCompleted, page }: TP03AComponentProps) => {
  const thisPage = page as TP03A;
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

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP03Layout>
        <HtmlWrapper>
          <HtmlContentComponent html={htmlString ?? ""} />
        </HtmlWrapper>
        <TextBoxes
          datas={TextBoxesContentData?.data ?? []}
          customBoxContainerCss={customBoxContainerCss}
          customBoxCss={customBoxCss}
        />
        <AudioWrapper>
          <AudioButton isAudio={true} audioUrl={AudioContentData?.data?.[0].src} />
        </AudioWrapper>
      </TP03Layout>
    </TemplateCommonLayout>
  );
};

export default TP03AComponent;
