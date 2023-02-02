import React, { useCallback, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { TP03B, TP03C, TP03D } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TitleContent from "../molecules/TitleContent";
import TextBoxes from "../molecules/TextBoxes";
import { AudioContent, HtmlContent, TextBoxesContent } from "../../types/templateContents";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP03Layout from "../Layouts/TP03Layout";
import { colorPalette } from "../../styles/colorPalette";
import AudioButton from "../atoms/AudioButton";
import { css } from "@emotion/react";
import { TemplateType } from "../../types/appData";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

const customBox03DContainerCss = css`
  display: inline-block;
  width: auto;
  margin: ${changePXtoVW(50)} auto;
  text-align: center;

  > .horizontal {
    align-items: center;
    
    > div:first-of-type {
      width: ${changePXtoVW(288)};
    }
  }
`;

const customBox03DCss = css`
  height: ${changePXtoVH(154)};
`;
const customBox03BContainerCss = css`
  gap: ${changePXtoVW(40)};
  width: ${changePXtoVW(1200)};
  margin-top: ${changePXtoVW(50)};
`;

const tp03CHtmlCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: ${changePXtoVW(200)};
`;

interface TP0BAComponentProps extends TemplateProps {}

const HtmlWrapper = styled("div")`
  font-weight: 400;
  font-size: ${changePXtoVW(48)};
  line-height: 1.5;
  color: ${colorPalette.descriptionText};
  white-space: pre-line;
  text-align: center;
`;

const AudioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${changePXtoVW(40)};
`;

/**
 * template type에 따라 TP03B, TP03C를 렌더함.
 */
const TP03BComponent = ({ setPageCompleted, page, showHeader = true }: TP0BAComponentProps) => {
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

  const getMainContents = useCallback(
    (templateType: TemplateType) => {
      if (!TextBoxesContentData?.data) {
        return <></>;
      }
      if (templateType === "TP03C") {
        return (
          <>
            <TextBoxes datas={TextBoxesContentData.data} />
            <HtmlWrapper>
              <HtmlContentComponent html={htmlString ?? ""} customCss={tp03CHtmlCss} />
            </HtmlWrapper>
          </>
        );
      } else {
        return (
          <>
            <HtmlWrapper>
              <HtmlContentComponent html={htmlString ?? ""} />
            </HtmlWrapper>
            <TextBoxes
              datas={TextBoxesContentData.data}
              isHorizontal={templateType === "TP03D" ? true : false}
              customBoxCss={templateType === "TP03D" ? customBox03DCss : undefined}
              customBoxContainerCss={
                templateType === "TP03D" ? customBox03DContainerCss : customBox03BContainerCss
              }
            />
          </>
        );
      }
    },
    [TextBoxesContentData?.data, htmlString],
  );

  const renderTP03BAndCComponents = useMemo(() => {
    const { type: templateType } = thisPage.template;
    return (
      <TP03Layout isReverse={true}>
        {getMainContents(templateType)}
        {AudioContentData?.data?.[0]?.src ? (
          <AudioWrapper>
            <AudioButton isAudio={true} audioUrl={AudioContentData.data[0].src} />
          </AudioWrapper>
        ) : (
          <></>
        )}
      </TP03Layout>
    );
  }, [thisPage.template, AudioContentData, getMainContents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      {renderTP03BAndCComponents ?? <></>}
    </TemplateCommonLayout>
  );
};

export default TP03BComponent;
