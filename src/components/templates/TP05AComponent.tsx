import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { breakPoints } from "../../constants/layout";
import { TP05A } from "../../types/pageTemplate";
import { HtmlContent, TextBoxesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP05Layout from "../Layouts/TP05Layout";
import TextBoxes from "../molecules/TextBoxes";
import TipComponent from "../molecules/TipComponent";
import TitleContent from "../molecules/TitleContent";

const customBoxCss = css`
  height: 80px;

  @media all and (max-width: ${breakPoints.tablet}) {
    height: 8vw;
  }
`;

const customBoxWrapperCss = css`
  width: 100%;
  text-align: left;
  align-items: center;
  line-height: 30px;
  @media all and (max-width: ${breakPoints.tablet}) {
    line-height: 3vw;
  }
`;

const customBoxContainerCss = css`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const customTipCss = css`
  width: 414px;
  margin: 0 auto;

  @media all and (max-width: ${breakPoints.tablet}) {
    width: 46vw;
  }
`;

interface TP05AComponentProps extends TemplateProps {}

const TP05AComponent = ({ setPageCompleted, page, showHeader = true }: TP05AComponentProps) => {
  const thisPage = page as TP05A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const TextBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage]);

  const htmlTipString = useMemo(() => {
    const htmlTipData = htmlContent?.data.find((content) => content.kind === "tip");
    return htmlTipData?.text;
  }, [htmlContent]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP05Layout>
        <TextBoxes
          datas={TextBoxesContentData?.data ?? []}
          isHorizontal={true}
          customBoxCss={customBoxCss}
          customBoxWrapperCss={customBoxWrapperCss}
          customBoxContainerCss={customBoxContainerCss}
        />
        <TipComponent html={htmlTipString ?? ""} customCss={customTipCss} />
      </TP05Layout>
    </TemplateCommonLayout>
  );
};

export default TP05AComponent;
